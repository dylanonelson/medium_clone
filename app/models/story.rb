class Story < ActiveRecord::Base

  validates :title, presence: true
  validates :body, presence: true
  validates_attachment_content_type :banner, content_type: /\Aimage\/.*\Z/

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

  has_attached_file :banner

end
