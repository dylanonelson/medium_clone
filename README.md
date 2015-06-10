# Message
[Live](http://www.mcmedium.com)
[GitHub](http://www.github.com/dylanonelson/medium_clone)

## Description
A social blogging platform inspired by Medium. Message is a comprehensive Backbone app that consumes a Rails JSON API, providing users access to content and even RESTful actions regardless of whether they’re logged in. Like Medium, Message features an intuitive text editor and an attractive, minimal design built from the ground up with custom CSS.

Users can:
* Browse popular authors and stories without logging in
* Search for users and tags
* Log in from multiple computers
* Log in with Twitter
* Use their Twitter image as their avatar or upload a new one
* View individual stories
* Comment on stories
* Follow other users
* Follow tags
* View a feed of subscribed users and tags
* Save drafts of stories and edit them later
* Tag stories
* Create new tags
* Apply formatting to their posts
* Upload a banner image for their stories

## Implementation

### Special considerations
* AJAX-based authentication through Backbone uses asynchronous callbacks to handle user actions dynamically depending on login state
* Sidebar view slides in and out using CSS3 transformations upon completion of an AJAX authentication request
* Custom SQL fetches trending stories in one query using aggregate functions and sub-queries
* Story editor uses HTML5’s contentEditable attribute and parses the resulting HTML to save unique IDs for each previously unsaved paragraph so that comments can be persistently associated with individual fragments
* Story model uses regex to validate length in words, but only if story is meant for publication
* Story display pages memoize comment sidebar so that users can select and deselect one paragraph at a time
* Backbone “Followable” mixin consumes Rails API’s polymorphic association for following both users and tags
* Profile view mixin DRYs up code for current user’s vs. other users’ profile pages
* Style configuration file centralizes adjustments to single-page site layout using Sass variables

### Ruby Gems
* [Medium-Editor](https://github.com/yabwe/medium-editor) and [Medium-Editor-Rails](https://github.com/marjinal1st/medium-editor-rails) for story editor toolbar
* [Paperclip](https://github.com/thoughtbot/paperclip), [Figaro](https://github.com/laserlemon/figaro), and [AWS](https://github.com/aws/aws-sdk-ruby) for file uploads
* [Omniauth-Twitter](https://github.com/arunagw/omniauth-twitter) for Twitter OAuth integration
* [PgSearch](https://github.com/Casecommons/pg_search) for search

### JavaScript Libraries
* [SerializeJSON](https://github.com/marioizquierdo/jquery.serializeJSON) for form submission
* jQuery!
* [Underscore.js](http://underscorejs.org/) for the “tie to go along with jQuery’s tux and Backbone’s suspenders”

### Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

### Todos
- [ ] Mobile responsive stylesheet
- [ ] Optimize story editor for editing published stories
- [ ] Autocompletion and dynamic tag creation for tag form
- [ ] Bookmark posts to read later
- [ ] Post stories to Twitter
- [ ] Recommend posts
- [ ] Respond to posts