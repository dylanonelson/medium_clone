json.id tag.id
json.label tag.label
json.followers_count tag.num_followers
json.stories_count tag.num_stories
json.following current_user.follows?(tag)