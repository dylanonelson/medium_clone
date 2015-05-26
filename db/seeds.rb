c = User.create(
  username: "chesterton",
  password: "gkchesterton",
  email: "chesterton@gutenberg.com",
  avatar: File.open("#{Rails.root}/app/assets/seeds/avatars/chesterton.png")
)

e = User.create(
  username: "emerson",
  password: "rwemerson",
  email: "emerson@gutenberg.com",
  avatar: File.open("#{Rails.root}/app/assets/seeds/avatars/emerson.jpg")
)

s = User.create(
  username: "seneca",
  password: "lcseneca",
  email: "seneca@gutenberg.com",
  avatar: File.open("#{Rails.root}/app/assets/seeds/avatars/seneca.jpg")
)

t = User.create(
  username: "twain",
  password: "mtwain",
  email: "twain@gutenberg.com",
  avatar: File.open("#{Rails.root}/app/assets/seeds/avatars/twain.jpg")
)

c.stories.create!(
  title: "A Piece of Chalk",
  body: File.read("#{Rails.root}/app/assets/seeds/stories/chesterton/a_piece_of_chalk.txt"),
  last_edited_at: DateTime.now,
  published_at: DateTime.now,
  published: true,
  banner: File.open("#{Rails.root}/app/assets/seeds/banners/chesterton/a_piece_of_chalk.jpg")
)
c.stories.create!(
  title: "On Lying in Bed",
  body: File.read("#{Rails.root}/app/assets/seeds/stories/chesterton/on_lying_in_bed.txt"),
  last_edited_at: DateTime.now,
  published_at: DateTime.now,
  published: true
)

e.stories.create!(
  title: "Experience",
  body: File.read("#{Rails.root}/app/assets/seeds/stories/emerson/experience.txt"),
  last_edited_at: DateTime.now,
  published_at: DateTime.now,
  published: true
)
e.stories.create!(
  title: "Ilusions",
  body: File.read("#{Rails.root}/app/assets/seeds/stories/emerson/illusions.txt"),
  last_edited_at: DateTime.now,
  published_at: DateTime.now,
  published: true
)
e.stories.create!(
  title: "Montaigne; Or the Skeptic",
  body: File.read("#{Rails.root}/app/assets/seeds/stories/emerson/montaigne_or_the_skeptic.txt"),
  last_edited_at: DateTime.now,
  published_at: DateTime.now,
  published: true
)

s.stories.create!(
  title: "On the Diseases of the Soul",
  body: File.read("#{Rails.root}/app/assets/seeds/stories/seneca/on_the_diseases_of_the_soul.txt"),
  last_edited_at: DateTime.now,
  published_at: DateTime.now,
  published: true
)
s.stories.create!(
  title: "Some Arguments in Favor of the Simple Life",
  body: File.read("#{Rails.root}/app/assets/seeds/stories/seneca/some_arguments_in_favor_of_the_simple_life.txt"),
  last_edited_at: DateTime.now,
  published_at: DateTime.now,
  published: true
)

t.stories.create!(
  title: "Hygiene and Sentiment",
  body: File.read("#{Rails.root}/app/assets/seeds/stories/twain/hygiene_and_sentiment.txt")  ,
  last_edited_at: DateTime.now,
  published_at: DateTime.now,
  published: true
)
t.stories.create!(
  title: "The Art of Inhumation",
  body: File.read("#{Rails.root}/app/assets/seeds/stories/twain/the_art_of_inhumation.txt")  ,
  last_edited_at: DateTime.now,
  published_at: DateTime.now,
  published: true
)

t.follow(c)
c.follow(s)
t.follow(e)
e.follow(s)

m = User.create!(
  username: "marshall",
  email: "marshall@gutenberg.com",
  password: "mmcluhan"
)

m.follow(t)
m.follow(c)
m.follow(e)
m.follow(s)