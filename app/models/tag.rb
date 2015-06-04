class Tag < ActiveRecord::Base

  include PgSearch

  multisearchable against: [:label]

  validates :label, uniqueness: true, presence: true

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

  def num_followers
    self.passive_follows.count
  end

  def num_stories
    self.taggings.count
  end

  def published_stories
    self.stories.where(published: true)
  end

  def ensure_lower_case
    self.label.downcase!
  end

end
