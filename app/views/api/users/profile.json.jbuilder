json.username current_user.username
json.email current_user.email
json.id current_user.id
json.avatar_url current_user.avatar.url(:thumb)
json.followers_count current_user.passive_follows.length
json.followed_authors current_user.followed_authors, partial: 'api/users/user', as: :user
json.followed_tags current_user.followed_tags, partial: 'api/tags/tag', as: :tag