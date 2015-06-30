FactoryGirl.define do
  factory :user do
    username { Faker::Internet.user_name}
    password { Faker::Internet.password(6) }
    avatar { URI.parse(Faker::Avatar.image('avatar', '100x100', 'jpg')) }

    factory :user_with_short_password do
      password { Faker::Internet.password(3) }
    end
  end
end