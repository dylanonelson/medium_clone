json.id story.id
json.title story.title
json.body story.body
if story.banner?
  json.banner_url do 
    json.summary asset_path(story.banner.url(:summary))
    json.original asset_path(story.banner.url)
  end
end
json.author do
  json.id story.author.id
  json.username story.author.username
end
json.tags story.tags do |t|
  json.id t.id
  json.label t.label
end
