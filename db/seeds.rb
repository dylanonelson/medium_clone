seeds_dir = "#{Rails.root}/app/assets/seeds"

c = User.create(
  username: "chesterton",
  password: "gkchesterton",
  avatar: File.open("#{seeds_dir}/avatars/chesterton.png")
)

e = User.create(
  username: "emerson",
  password: "rwemerson",
  avatar: File.open("#{seeds_dir}/avatars/emerson.jpg")
)

s = User.create(
  username: "seneca",
  password: "lcseneca",
  avatar: File.open("#{seeds_dir}/avatars/seneca.jpg")
)

t = User.create(
  username: "twain",
  password: "mtwain",
  avatar: File.open("#{seeds_dir}/avatars/twain.jpg")
)

mdm = User.create(
  username: "montaigne",
  password: "mdmontaigne",
  avatar: File.open("#{seeds_dir}/avatars/montaigne.jpg")
)

sontag = User.create(
  username: "sontag",
  password: "ssontag",
  avatar: File.open("#{seeds_dir}/avatars/sontag.jpg")
)

c.stories.create!(
  title: "A Piece of Chalk",
  body: File.read("#{seeds_dir}/stories/chesterton/a_piece_of_chalk.txt"),
  last_edited_at: DateTime.now,
  published_at: DateTime.now,
  published: true,
  banner: File.open("#{seeds_dir}/banners/chesterton/a_piece_of_chalk.jpg")
)
on_lying_in_bed = c.stories.create!(
  title: "On Lying in Bed",
  body: File.read("#{seeds_dir}/stories/chesterton/on_lying_in_bed.txt"),
  last_edited_at: DateTime.now,
  published_at: DateTime.now,
  published: true,
  banner: File.open("#{seeds_dir}/banners/chesterton/on_lying_in_bed.jpg")
)

e.stories.create!(
  title: "Experience",
  body: File.read("#{seeds_dir}/stories/emerson/experience.txt"),
  last_edited_at: DateTime.now,
  published_at: DateTime.now,
  published: true
)
e.stories.create!(
  title: "Illusions",
  body: File.read("#{seeds_dir}/stories/emerson/illusions.txt"),
  last_edited_at: DateTime.now,
  published_at: DateTime.now,
  published: true,
  banner: File.open("#{seeds_dir}/banners/emerson/illusions.jpg")
)
e.stories.create!(
  title: "Montaigne; Or the Skeptic",
  body: File.read("#{seeds_dir}/stories/emerson/montaigne_or_the_skeptic.txt"),
  last_edited_at: DateTime.now,
  published_at: DateTime.now,
  published: true
)

s.stories.create!(
  title: "On the Diseases of the Soul",
  body: File.read("#{seeds_dir}/stories/seneca/on_the_diseases_of_the_soul.txt"),
  last_edited_at: DateTime.now,
  published_at: DateTime.now,
  published: true
)
s.stories.create!(
  title: "Some Arguments in Favor of the Simple Life",
  body: File.read("#{seeds_dir}/stories/seneca/some_arguments_in_favor_of_the_simple_life.txt"),
  last_edited_at: DateTime.now,
  published_at: DateTime.now,
  published: true
)

t.stories.create!(
  title: "Hygiene and Sentiment",
  body: File.read("#{seeds_dir}/stories/twain/hygiene_and_sentiment.txt")  ,
  last_edited_at: DateTime.now,
  published_at: DateTime.now,
  published: true,
  banner: File.open("#{seeds_dir}/banners/twain/hygiene_and_sentiment.jpg")
)
t.stories.create!(
  title: "The Art of Inhumation",
  body: File.read("#{seeds_dir}/stories/twain/the_art_of_inhumation.txt")  ,
  last_edited_at: DateTime.now,
  published_at: DateTime.now,
  published: true
)

mdm.stories.create!(
  title: "Of Cannibals",
  body: File.read("#{seeds_dir}/stories/montaigne/of_cannibals.txt")  ,
  last_edited_at: DateTime.now,
  published_at: DateTime.now,
  published: true
)
mdm.stories.create!(
  title: "Of Sleep",
  body: File.read("#{seeds_dir}/stories/montaigne/of_sleep.txt")  ,
  last_edited_at: DateTime.now,
  published_at: DateTime.now,
  published: true
)

on_photography = sontag.stories.create!(
  title: "On Photography (excerpt)",
  body: File.read("#{seeds_dir}/stories/sontag/on_photography.txt"),
  last_edited_at: DateTime.now,
  published_at: DateTime.now,
  published: true,  
  banner: File.open("#{seeds_dir}/banners/sontag/on_photography.jpg")
)

media_tag = Tag.create!(
  label: "media"  
)

on_photography.taggings.create(
  tag_id: media_tag.id
)

t.follow(c)
c.follow(s)
t.follow(e)
e.follow(s)

m = User.create!(
  username: "marshall",
  password: "mmcluhan",
  avatar: File.open("#{seeds_dir}/avatars/mcluhan.jpg")
)

m.stories.create(
  title: "The Medium is the Message",
  body: File.read("#{seeds_dir}/stories/mcluhan/the_medium_is_the_message.txt"),
  last_edited_at: DateTime.now,
  published_at: DateTime.now,
  published: true,
  banner: File.open("#{seeds_dir}/banners/mcluhan/the_medium_is_the_message.jpg")
)

m.follow(t)
m.follow(c)
m.follow(e)
m.follow(s)
m.follow(media_tag)

m.comments.create!(
  body: "I too have felt this way on many occasions when looking at my bedroom ceiling.",
  fragment_id: "\\\"BZVpEs\\\"",
  story_id: on_lying_in_bed.id
)

m.comments.create!(
  body: "There is a true freedom in rejecting our mechanically-minded society's obsession with justification.",
  fragment_id: "\\\"d9yyO4\\\"",
  story_id: on_lying_in_bed.id
)

m.comments.create!(
  body: "Sontag understands perfectly how the qualities of the medium can alter reality for its users. I would also add that she accurately pinpoints artists as the prophets of this alteration.",
  fragment_id: "asdf",
  story_id: on_photography.id
)