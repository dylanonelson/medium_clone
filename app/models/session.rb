class Session < ActiveRecord::Base

  after_initialize :ensure_session_token

  validates :session_token, presence: true, uniqueness: true, allow_nil: false

  belongs_to :user

  def self.generate_token
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_token
  end

end
