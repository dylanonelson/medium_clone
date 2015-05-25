MediumClone.Views.TrendingStoriesIndex = Backbone.CompositeView.extend({

  template : JST['stories/trending_stories'],

  className : 'trending-stories',

  render : function () {
    var rendered = this.template();
    this.$el.html(rendered);

    var commentStoriesView = new MediumClone.Views.StoriesIndex({
      collection : this.commentStories,
    });

    var authorStoriesView = new MediumClone.Views.StoriesIndex({
      collection : this.authorStories,
    });

    this.addSubview('#comment-stories', commentStoriesView);
    this.addSubview('#author-stories', authorStoriesView);

    return this;
  },

  initialize : function (options) {
    this.commentStories = options.commentStories;
    this.commentStories.fetch();

    this.authorStories = options.authorStories;
    this.authorStories.fetch();
  },

})