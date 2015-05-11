# Medium Spare

## Minimum Viable Product
Medium Spare is a clone of Medium built on Rails and Backbone. Users can:

- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Create stories
- [ ] Save drafts of stories
- [ ] Follow other users
- [ ] Follow tags
- [ ] View a feed of subscribed users and tags
- [ ] Tag stories
  [ ] Apply formatting to their posts
- [ ] Search for users, tags, and posts

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Users and stories (~1 day)
I will implement basic user authentication in Rails so that users can stay
signed in on one computer. By the end of this phase, users will be able to
create stories using a simple text form in a Rails view and view those stories
in a simple Backbone view.

[Details][phase-one]

### Phase 2: Follows and feeds (~2 days)
I will add a new Rails model for following users. Users will be able to follow
each other. Users' home page will be a Backbone index view that shows all the
(published) posts from users they are following. To do this, I will create a
feed route in the stories controller that uses the users' subscribed_authors
association to return the appropriate posts.

[Details][phase-two]

### Phase 3: Tags and taggings (~2 days)
I will add new Rails models, tags and taggings, that belong to posts. Post views
will display the tags that they have. I will make follows into a polymorphic
association that can belong to either users or tags. Posts either from users or
from tags will appear in users' feeds.

[Details][phase-three]

### Phase 4: Composition view (~3 days)
I will add formatting to the post composition page. I have no idea how I will do
this, but I would like to emulate Medium's formatting toolbar.

[Details][phase-four]

### Phase 5: Searching for users and tags (~2 days)
I will add a search controller to my API that serves results for users and tags.

[Details][phase-five]

### Bonus Features (TBD)
- [ ] Bookmark posts to read later
- [ ] Publicly highlight post text
- [ ] Publicly comment in posts' margins
- [ ] Automatically post stories to Twitter
- [ ] Recommend posts
- [ ] Respond to posts

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
