MediumClone.Views.FeedStoriesIndex = Backbone.CompositeView.extend({

  template : JST['stories/feed_stories'],

  className : 'feed-stories',

  render : function () {
    var rendered = this.template();
    this.$el.html(rendered);

    var storiesIndex = new MediumClone.Views.StoriesIndex({
      collection : this.collection,
    });

    this.addSubview('#feed-stories', storiesIndex);

    return this;
  },
})