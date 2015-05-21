json.username user.username
json.id user.id
json.avatar_url user.avatar.url
json.following current_user.follows?(user) if logged_in?