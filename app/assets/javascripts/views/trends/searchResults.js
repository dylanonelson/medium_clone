MediumClone.Views.SearchResults = Backbone.CompositeView.extend({

  className : 'search-results-frame',

  template : JST['trends/search_results'],

  render : function () {
    var rendered = this.template({
      stories : this.stories,
      users : this.users,
      tags : this.tags,
    });

    this.$el.html(rendered);
    return this;
  },

  initialize : function (options) {
    var results = options.results;
    this.render();

    this.stories = new MediumClone.Collections.Stories(results.stories, {
      url : 'api/stories',
    });
    var storiesIndex = new MediumClone.Views.StoriesIndex({
      collection : this.stories,
    });
    this.addSubview('#stories', storiesIndex);  

    this.users = new MediumClone.Collections.Users(results.users);
    if (this.users.length > 0) {
      var usersIndex = new MediumClone.Views.UsersIndex({
        collection : this.users,
      });
      this.addSubview('#users', usersIndex);
    } else {
      var $emptyUsersIndex = $('<p>').addClass('empty-index').text('There are no authors to display.');
      this.$('#users').append($emptyUsersIndex);
    }

    this.tags = new MediumClone.Collections.Tags(results.tags, {
      url : 'api/tags'
    });
    if (this.tags.length > 0) {
      var tagsIndex = new MediumClone.Views.TagsIndex({
        collection : this.tags,
      });
      this.addSubview('#tags', tagsIndex);
    } else {
      var $emptyTagIndex = $('<p>').addClass('empty-index').text('There are no tags to display.');
      this.$('#tags').append($emptyTagIndex);
    }

  },

})