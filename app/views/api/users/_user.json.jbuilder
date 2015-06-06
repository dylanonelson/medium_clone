json.username user.username
json.id user.id
json.avatar_url user.avatar.url
json.stories_count user.num_stories
json.followers_count user.num_followers
json.following current_user.follows?(user) if logged_in?