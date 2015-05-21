json.username @user.username
json.email @user.email
json.id @user.id
json.avatar_url @user.avatar.url(:thumb)
json.followers_count @user.passive_follows.length
json.followed_authors @user.followed_authors, partial: 'api/users/user', as: :user
json.followed_tags @user.followed_tags, partial: 'api/tags/tag', as: :tag
if logged_in? && current_user.id != @user.id
  json.following current_user.follows? @user 
end