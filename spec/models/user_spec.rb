require 'rails_helper'

describe User do
  it 'is invalid when its password is too short' do
    expect(build(:user_with_short_password)).to be_invalid
  end
end