class Story < ActiveRecord::Base

  include PgSearch

  multisearchable against: [:title, :body]

  validates :title, presence: true, if: :published
  validates :body, presence: true, if: :published
  validates_inclusion_of :published, in: [true, false]
  validates :published_at, presence: true, if: :published

  belongs_to :author,
    class_name: "User",
    foreign_key: :author_id

  has_many :comments

  has_many :commenters,
    through: :comments,
    source: :commenter

  has_many :taggings, inverse_of: :story

  has_many :tags,
    through: :taggings,
    source: :tag

  has_attached_file :banner, 
    styles: { summary: "550x200^" }, 
    convert_options: { summary: "-gravity center -crop '550x200+0+0'" }

  validates_attachment_content_type :banner, content_type: /\Aimage\/.*\Z/

  def self.most_commented
    query = <<-SQL
      SELECT
        stories.*
      FROM
        stories
      JOIN
        comments
      ON
        stories.id = comments.story_id
      GROUP BY
        stories.id
      ORDER BY
        COUNT(comments.id) DESC
      LIMIT 
        15
    SQL

    find_by_sql(query)
  end

  def self.from_popular_authors
    popular_authors_query = <<-SQL
      SELECT
        followed_users.id
      FROM
        users AS followed_users
      JOIN
        follows
      ON
        follows.followable_id = followed_users.id
      AND
        follows.followable_type = 'User'
      JOIN
        users AS following_users
      ON
        follows.follower_id = following_users.id
      GROUP BY
        followed_users.id
      ORDER BY
        COUNT(following_users.id) DESC
      LIMIT 
        15
    SQL

    stories_query = <<-SQL 
      SELECT
        stories.*
      FROM
        stories
      WHERE
        stories.id
      IN
        (#{popular_authors_query})
      ORDER BY
        stories.published_at
      LIMIT
        15
    SQL

    find_by_sql(stories_query)
  end

end
