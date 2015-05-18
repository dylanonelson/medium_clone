class Tag < ActiveRecord::Base

  validates :label, uniqueness: true

  before_save :ensure_lower_case

  has_many :taggings

  has_many :stories,
    through: :taggings,
    source: :story

  has_many :passive_follows,
    class_name: "Follow",
    foreign_key: :followable_id,
    as: :followable

  has_many :followers,
    through: :passive_follows,
    source: :follower

  def ensure_lower_case
    self.label.downcase!
  end

end
