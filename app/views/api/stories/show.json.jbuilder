json.id @story.id
json.title @story.title
json.body @story.body
json.author do
  json.id @story.author.id
  json.username @story.author.username
end