class Tagging < ActiveRecord::Base

  validates :story_id, uniqueness: { scope: :tag_id }

  belongs_to :story
  belongs_to :tag

end
