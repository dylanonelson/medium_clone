seeds_dir = "#{Rails.root}/app/assets/seeds"

chesterton = User.create(
  username: "chesterton",
  password: "gkchesterton",
  avatar: File.open("#{seeds_dir}/avatars/chesterton.png")
)

a_piece_of_chalk = chesterton.stories.create!(
  title: "A Piece of Chalk",
  body: File.read("#{seeds_dir}/stories/chesterton/a_piece_of_chalk.txt"),
  last_edited_at: DateTime.now,
  published_at: DateTime.new(2015,5,22),
  published: true,
  banner: File.open("#{seeds_dir}/banners/chesterton/a_piece_of_chalk.jpg")
)
on_lying_in_bed = chesterton.stories.create!(
  title: "On Lying in Bed",
  body: File.read("#{seeds_dir}/stories/chesterton/on_lying_in_bed.txt"),
  last_edited_at: DateTime.now,
  published_at: DateTime.new(2015,5,28),
  published: true,
  banner: File.open("#{seeds_dir}/banners/chesterton/on_lying_in_bed.jpg")
)

# =======
# EMERSON
# =======
emerson = User.create(
  username: "emerson",
  password: "rwemerson",
  avatar: File.open("#{seeds_dir}/avatars/emerson.jpg")
)
emerson.stories.create!(
  title: "Experience",
  body: File.read("#{seeds_dir}/stories/emerson/experience.txt"),
  last_edited_at: DateTime.now,
  published_at: DateTime.new(2015,5,23),
  published: true
)
emerson.stories.create!(
  title: "Illusions",
  body: File.read("#{seeds_dir}/stories/emerson/illusions.txt"),
  last_edited_at: DateTime.now,
  published_at: DateTime.new(2015,6,5),
  published: true,
  banner: File.open("#{seeds_dir}/banners/emerson/illusions.jpg")
)
montaigne_or_the_skeptic = emerson.stories.create!(
  title: "Montaigne; Or the Skeptic",
  body: File.read("#{seeds_dir}/stories/emerson/montaigne_or_the_skeptic.txt"),
  last_edited_at: DateTime.now,
  published_at: DateTime.new(2015,5,14),
  published: true
)

montaigne_tag = Tag.create!(
  label: 'montaigne',
)

montaigne_or_the_skeptic.taggings.create!(
  tag_id: montaigne_tag.id
)

# ======
# SENECA
# ======
seneca = User.create(
  username: "seneca",
  password: "lcseneca",
  avatar: File.open("#{seeds_dir}/avatars/seneca.jpg")
)
seneca.stories.create!(
  title: "On the Diseases of the Soul",
  body: File.read("#{seeds_dir}/stories/seneca/on_the_diseases_of_the_soul.txt"),
  last_edited_at: DateTime.now,
  published_at: DateTime.new(2015,3,22),
  published: true
)
seneca.stories.create!(
  title: "Some Arguments in Favor of the Simple Life",
  body: File.read("#{seeds_dir}/stories/seneca/some_arguments_in_favor_of_the_simple_life.txt"),
  last_edited_at: DateTime.now,
  published_at: DateTime.new(2015,4,8),
  published: true
)

# =====
# TWAIN
# =====
twain = User.create(
  username: "twain",
  password: "mtwain",
  avatar: File.open("#{seeds_dir}/avatars/twain.jpg")
)
twain.stories.create!(
  title: "Hygiene and Sentiment",
  body: File.read("#{seeds_dir}/stories/twain/hygiene_and_sentiment.txt"),
  last_edited_at: DateTime.now,
  published_at: DateTime.new(2015,5,14,5,4,6),
  published: true,
  banner: File.open("#{seeds_dir}/banners/twain/hygiene_and_sentiment.jpg")
)
twain.stories.create!(
  title: "The Art of Inhumation",
  body: File.read("#{seeds_dir}/stories/twain/the_art_of_inhumation.txt")  ,
  last_edited_at: DateTime.now,
  published_at: DateTime.new(2015,5,20),
  published: true
)

# =========
# MONTAIGNE
# =========
montaigne = User.create(
  username: "montaigne",
  password: "mdmontaigne",
  avatar: File.open("#{seeds_dir}/avatars/montaigne.jpg")
)
of_cannibals = montaigne.stories.create!(
  title: "Of Cannibals",
  body: File.read("#{seeds_dir}/stories/montaigne/of_cannibals.txt")  ,
  last_edited_at: DateTime.now,
  published_at: DateTime.new(2015,5,24,4,5,6),
  published: true
)
skepticism_tag = Tag.create(
  label: 'skepticism'
)
of_cannibals.taggings.create!(
  tag_id: skepticism_tag.id
)
of_sleep = montaigne.stories.create!(
  title: "Of Sleep",
  body: File.read("#{seeds_dir}/stories/montaigne/of_sleep.txt")  ,
  last_edited_at: DateTime.now,
  published_at: DateTime.new(2015,6,1),
  published: true
)
gossip_tag = Tag.create(
  label: 'gossip'
)
of_sleep.taggings.create!(
  tag_id: gossip_tag.id
)

# ======
# SONTAG
# ======
sontag = User.create(
  username: "sontag",
  password: "ssontag",
  avatar: File.open("#{seeds_dir}/avatars/sontag.jpg")
)
on_photography = sontag.stories.create!(
  title: "On Photography (excerpt)",
  body: File.read("#{seeds_dir}/stories/sontag/on_photography.txt"),
  last_edited_at: DateTime.now,
  published_at: DateTime.new(2015,5,24),
  published: true,  
  banner: File.open("#{seeds_dir}/banners/sontag/on_photography.jpg")
)
media_tag = Tag.create!(
  label: "media"  
)
on_photography.taggings.create(
  tag_id: media_tag.id
)

# ======
# ORWELL
# ======
orwell = User.create(
  username: "orwell",
  password: "gorwell",
  avatar: File.open("#{seeds_dir}/avatars/orwell.jpg")
)

politics_and_the_english_language = orwell.stories.create!(
  title: "Politics and the English Language",
  body: File.read("#{seeds_dir}/stories/orwell/politics_and_the_english_language.txt"),
  last_edited_at: DateTime.now,
  published_at: DateTime.new(2015,5,23,4,5,6),
  published: true,
  banner: File.open("#{seeds_dir}/banners/orwell/politics_and_the_english_language.png")
)
language_tag = Tag.create(
  label: 'language'
)
politics_and_the_english_language.taggings.create!(
  tag_id: language_tag.id
)
politics_tag = Tag.create(
  label: 'politics'
)
politics_and_the_english_language.taggings.create!(
  tag_id: politics_tag.id
)

# ========
# BENJAMIN
# ========
benjamin = User.create!(
  username: 'benjamin',
  password: 'wbenjamin',
  avatar: File.open("#{seeds_dir}/avatars/benjamin.jpg")
)
the_work_of_art_in_the_age = benjamin.stories.create!(
  title: "The Work of Art in the Age of Mechanical Reproduction",
  body: File.read("#{seeds_dir}/stories/benjamin/the_work_of_art_in_the_age.txt"),
  last_edited_at: DateTime.now,
  published_at: DateTime.new(2015,5,26),
  published: true,
  banner: File.open("#{seeds_dir}/banners/benjamin/the_work_of_art_in_the_age.jpg")
)
art_tag = Tag.create!(
  label: 'art'
)
the_work_of_art_in_the_age.taggings.create!(
  tag_id: art_tag.id
)
the_work_of_art_in_the_age.taggings.create!(
  tag_id: media_tag.id
)
the_work_of_art_in_the_age.taggings.create!(
  tag_id: politics_tag.id
)

sontag.follow(benjamin)
sontag.follow(art_tag)

chesterton.follow(seneca)
twain.follow(chesterton)
twain.follow(emerson)
twain.follow(benjamin)
emerson.follow(seneca)
emerson.follow(sontag)

# ========
# MARSHALL
# ========
marshall = User.create!(
  username: "marshall",
  password: "mmcluhan",
  avatar: File.open("#{seeds_dir}/avatars/mcluhan.jpg")
)

the_medium_is_the_message = marshall.stories.create(
  title: "The Medium is the Message",
  body: File.read("#{seeds_dir}/stories/mcluhan/the_medium_is_the_message.txt"),
  last_edited_at: DateTime.now,
  published_at: DateTime.new(2015,5,21),
  published: true,
  banner: File.open("#{seeds_dir}/banners/mcluhan/the_medium_is_the_message.jpg")
)

the_medium_is_the_message.taggings.create(
  tag_id: media_tag.id
)
the_medium_is_the_message.taggings.create(
  tag_id: art_tag.id
)

challenge_and_collapse = marshall.stories.create!(
  title: "Challenge and Collapse",
  body: File.read("#{seeds_dir}/stories/mcluhan/challenge_and_collapse.txt"),
  last_edited_at: DateTime.now,
  published: false,
  banner: File.open("#{seeds_dir}/banners/mcluhan/challenge_and_collapse.jpg")
)

marshall.follow(twain)
marshall.follow(chesterton)
marshall.follow(emerson)
marshall.follow(seneca)
marshall.follow(orwell)
marshall.follow(benjamin)

marshall.follow(media_tag)
marshall.follow(language_tag)
marshall.follow(art_tag)

orwell.follow(marshall)
sontag.follow(marshall)
emerson.follow(marshall)

marshall.comments.create!(
  body: "I too have felt this way on many occasions when looking at my bedroom ceiling.",
  fragment_id: "\\\"BZVpEs\\\"",
  story_id: on_lying_in_bed.id
)

marshall.comments.create!(
  body: "There is a true freedom in rejecting our mechanically-minded society's obsession with justification.",
  fragment_id: "\\\"d9yyO4\\\"",
  story_id: on_lying_in_bed.id
)

marshall.comments.create!(
  body: "Sontag understands perfectly how the qualities of the medium can alter reality for its users. I would also add that she accurately pinpoints artists as the prophets of this alteration.",
  fragment_id: "asdf",
  story_id: on_photography.id
)

sontag.comments.create!(
  body: "The most penetrating ideas often have this shocking effect.",
  fragment_id: "\\\"hyoHrW\\\"",
  story_id: the_medium_is_the_message.id
)

sontag.comments.create!(
  body: "The false dichotomy of form and content has long been a source of error on scholars' part.",
  fragment_id: "\\\"8pQlut\\\"",
  story_id: the_medium_is_the_message.id
)

emerson.comments.create!(
  body: "Montaigne skewers wonderfully European assumptions about naturalness.",
  fragment_id: "\\\"eex1pX\\\"",
  story_id: of_cannibals.id
)

orwell.comments.create!(
  body: "Montaigne's digressive style never fails to entertain me.",
  fragment_id: "\\\"XMpV28\\\"",
  story_id: of_cannibals.id
)

seneca.comments.create!(
  body: "Montaigne quotes me totally out of context here.",
  fragment_id: "\\\"hxOasd\\\"",
  story_id: of_cannibals.id
)

montaigne.comments.create!(
  body: "This paragraph of my essay reminds me about an assumption I once made about my bowel movements. For what, in the grand scheme of things, is the difference between the army of Rome and the mobilization of one's more visceral resources?",
  fragment_id: "\\\"ZXeZA1\\\"",
  story_id: of_cannibals.id
)

emerson.comments.create!(
  body: "This is one of the hardest faults to avoid, even for polished writers.",
  fragment_id: "\\\"6hxUax\\\"",
  story_id: politics_and_the_english_language.id
)

twain.comments.create!(
  body: "I must agree with Orwell on both counts here. Everything is certainly going to hell in a handbasket, especially in that most maligned and abused of disciplines, arts and letters.",
  fragment_id: "\\\"85nHOV\\\"",
  story_id: politics_and_the_english_language.id
)