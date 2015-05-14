class Comment < ActiveRecord::Base

  validates :body, :commenter_id, :story_id, :fragment_id, presence: true
  validates :body, length: { maximum: 300 }

  belongs_to :commenter,
    class_name: "User",
    foreign_key: :commenter_id

  belongs_to :story

end
