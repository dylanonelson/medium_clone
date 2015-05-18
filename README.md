# Medium Clone

## Minimum Viable Product
A clone of Medium built on Rails and Backbone. Users can:

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Create stories
- [x] See an index of all their stories
- [x] View individual stories
- [x] Comment on stories
- [x] View a collection of story summaries
- [x] View aggregated comments on stories
- [x] Follow other users
- [x] View their feed upon logging in
- [ ] Follow tags
- [ ] View a feed of subscribed users and tags
- [x] Tag stories
- [x] Create new tags
- [ ] Apply formatting to their posts
- [ ] Search for users, tags, and posts

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Users and stories (~2 day)
I will implement basic user authentication in Rails so that users can log in from 
multiple computers simultaneously. Moving into Backbone, I will add story display 
and creation. By the end of this phase, users will be able to log in, create stories,
and view them.

[Details][phase-one]

### Phase 2: Viewing and commenting on stories (~2 days)
I will add a comments model in Rails and create Backbone views that allow
users to highlight and annotate text inside of the story. My primary challenge
in this phase will be finding a way to store the anchored comment in the database.
I will also take some time to make sure that the basic UX functionality I want
is up and running.

[Details][phase-two]

### Phase 3: Follows and feeds (~1 days)
I will add a new Rails model for following users. Users will be able to follow
each other. Users' home page will be a Backbone index view that shows all the
(published) posts from users they are following. To do this, I will create a
feeds controller that renders posts from the the users' subscribed authors.

[Details][phase-three]

### Phase 4: Tags and taggings (~1 days)
I will add new Rails models, tags and taggings, that belong to posts. Post views
will display the tags that they have. I will make follows into a polymorphic
association that can belong to either users or tags. Posts either from users or
from tags will appear in users' feeds.

[Details][phase-four]

### Phase 5: Advanced composition features (~2 days)
I will use Paperclip, Figaro, and AWS to allow users to upload header images for
their stories. I will also allow them to edit their stories and save them as drafts
before making them public. If time allows, I would like to add more typographical
features to user-generated text -- for example, using typographer's quotes and 
genuine apostrophes for user generated text.

[Details][phase-five]

###Phase 6: Featured stories (~2 days)
I will implement authentication in Backbone so that users new to the site can still
read stories. I will build a home page for the site that will feature new and popular
stories so that users can find new authors and tags to follow. In this phase I would
also like to provide stable URLs for stories, whether or not you are signed in.

### Bonus Features (TBD)
- [ ] Search for users and tags
- [ ] Mobile responsive stylesheet
- [ ] View posts and users without signing in
- [ ] Bookmark posts to read later
- [ ] Automatically post stories to Twitter
- [ ] Recommend posts
- [ ] Respond to posts

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
