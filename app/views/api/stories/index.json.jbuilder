json.array! @stories do |s|
  json.id s.id
  json.title s.title
  json.body s.body
  json.author do
    json.id s.author.id
    json.username s.author.username
  end
end