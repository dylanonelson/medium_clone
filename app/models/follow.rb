class Follow < ActiveRecord::Base

  validates :follower, uniqueness: { scope: [:followable_type, :followable_id] }

  belongs_to :follower,
    class_name: "User",
    foreign_key: :follower_id

  belongs_to :followable,
    polymorphic: true

end
