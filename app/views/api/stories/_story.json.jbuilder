json.id story.id
json.title story.title
json.body story.body
json.author do
  json.id story.author.id
  json.username story.author.username
end
json.tags story.tags do |t|
  json.id t.id
  json.label t.label
end
