class User < ActiveRecord::Base

  include PgSearch

  multisearchable against: [:username]

  attr_reader :password

  validates :username, presence: true, uniqueness: { case_sensitive: false }
  validates :password, presence: true, length: { minimum: 6 }, allow_nil: true
  validates :password_digest, presence: true

  has_many :sessions, dependent: :destroy

  has_many :stories,
    foreign_key: :author_id

  has_many :comments,
    foreign_key: :commenter_id

  has_many :active_follows,
    class_name: "Follow",
    foreign_key: :follower_id

  has_many :followed_tags,
    through: :active_follows,
    source: :followable,
    source_type: 'Tag'

  has_many :followed_authors,
    through: :active_follows,
    source: :followable,
    source_type: 'User'

  has_many :passive_follows,
    class_name: "Follow",
    foreign_key: :followable_id,
    as: :followable

  has_many :followers,
    through: :passive_follows,
    source: :follower

  has_attached_file :avatar,
    styles: { thumb: "200x200#" },
    convert_options: { thumb: "-gravity center -crop '200x200+0+0'" },
    default_url: '/images/default_avatar.png'

  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/


  def self.find_by_credentials(un, pw)
    u = User.find_by(username: un)
    return nil unless u
    u.is_password?(pw) ? u : nil
  end

  def self.find_or_create_by_auth_hash(auth_hash)
    user = User.find_by(
            provider: auth_hash[:provider],
            uid: auth_hash[:uid]
    )

    unless user
      user = User.create!(
            provider: auth_hash[:provider],
            uid: auth_hash[:uid],
            username: auth_hash[:info][:nickname],
            avatar: URI.parse(auth_hash[:info][:image]),
            password: SecureRandom::urlsafe_base64
      )
    end

    user
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def follow(followable)
    followable.followers << self
  end

  def follows?(other)
    case other
    when User
      self.followed_author_ids.include?(other.id)
    when Tag
      self.followed_tag_ids.include?(other.id)
    else
      false
    end
  end

  def num_followers
    self.passive_follows.count
  end

  def published_stories
    self.stories.where(published: true)
  end

  def drafts
    self.stories.where(published: false)
  end

  def num_stories
    self.stories.count
  end

  def feed
    followed_tag_story_ids = <<-SQL
      SELECT
        taggings.story_id
      FROM
        taggings
      JOIN
        follows
      ON
        follows.followable_id = taggings.tag_id
      AND
        follows.followable_type = 'Tag'
      WHERE
        follows.follower_id = #{self.id}
    SQL

    followed_author_ids = <<-SQL
      SELECT
        users.id
      FROM
        users
      JOIN
        follows
      ON
        users.id = follows.followable_id
      AND
        follows.followable_type = 'User'
      WHERE
        follows.follower_id = #{self.id}
    SQL

    query = <<-SQL
      (
        stories.id IN (#{followed_tag_story_ids}) 
      OR 
        stories.author_id IN (#{followed_author_ids})
      )
      AND
        stories.published = 'true'
    SQL

    Story.where(query).order(published_at: :desc)
  end

end
