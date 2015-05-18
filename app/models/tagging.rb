class Tagging < ActiveRecord::Base

  validates :story, uniqueness: { scope: :tag_id }
  validates :story, presence: true

  belongs_to :story, inverse_of: :taggings
  belongs_to :tag

end
