FactoryGirl.define do
  factory :user do
    username 'username'
    password 'password'

    factory :user_with_short_password do
      password 'pass'
    end
  end
end