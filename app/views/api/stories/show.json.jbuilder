json.id @story.id
json.title @story.title
json.body @story.body
json.author do
  json.username @story.author.username
end