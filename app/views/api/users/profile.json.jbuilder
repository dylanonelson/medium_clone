json.current_user current_user, :username, :email, :id
json.followed_authors current_user.followed_authors, partial: 'api/users/user', as: :user
json.followed_tags current_user.followed_tags, partial: 'api/tags/tag', as: :tag