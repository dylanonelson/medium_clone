class Story < ActiveRecord::Base

  validates :title, presence: true
  validates :body, presence: true
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

end
