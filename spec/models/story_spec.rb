require 'rails_helper'

describe Story do
  it 'must have a title to be published' do
    expect(build(:published_story_without_title)).to be_invalid
  end

  it 'must have a body of at least 50 words to be published' do
    expect(build(:published_story_with_short_body)).to be_invalid
  end
end