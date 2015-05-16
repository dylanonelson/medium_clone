class User < ActiveRecord::Base

  EMAIL_REGEX = /\A([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})\z/i

  attr_reader :password

  validates :username, presence: true, uniqueness: { case_sensitive: false }
  validates :email, presence: true, uniqueness: { case_sensitive: false }
  validates_format_of :email, with: EMAIL_REGEX
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

  has_many :followeds,
    through: :active_follows,
    source: :followed

  has_many :passive_follows,
    class_name: "Follow",
    foreign_key: :followed_id

  has_many :followers,
    through: :passive_follows,
    source: :follower

  def self.find_by_credentials(un, pw)
    u = User.find_by(username: un)
    return nil unless u
    u.is_password?(pw) ? u : nil
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def follow(other)
    follow = Follow.new(follower_id: self.id, followed_id: other.id)
    follow.save ? true : false
  end

end
