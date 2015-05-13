json.array! @stories do |s|
  json.title s.title
  json.body s.body
  json.author do
    json.id s.author.id
    json.username s.author.username
  end
end