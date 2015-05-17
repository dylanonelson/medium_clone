class Tag < ActiveRecord::Base

  validates :label, uniqueness: true

  before_save :ensure_lower_case

  has_many :taggings

  has_many :stories,
    through: :taggings,
    source: :story

  def ensure_lower_case
    self.label.downcase!
  end

end
