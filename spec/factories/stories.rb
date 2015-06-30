FactoryGirl.define do
  factory :story do
    title { Faker::Lorem.words(5) }
    body { '<p>' + Faker::Lorem.paragraphs(10).join('</p><p>') + '</p>' }
    published false
    last_edited_at Time.now

    factory :published_story_without_title do
      published
      title ''
    end

    factory :published_story_with_short_body do
      published
      body { '<p>' + Faker::Lorem.words(49).join(' ') + '</p>' }
    end

    trait :published do
      published true
    end
  end
end