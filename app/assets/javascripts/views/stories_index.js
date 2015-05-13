MediumClone.Views.StoriesIndex = Backbone.CompositeView.extend({

  tagName : 'section',

  template : JST['stories_index'],

  render : function () {
    var rendered = this.template();
    this.$el.html(rendered);
    this.renderStories();
    return this;
  },

  renderStories : function () {
    var view = this;
    this.collection.each(function (story) {
      var storyShow = new MediumClone.Views.StoryShow({
        model : story,
      });

      view.addSubview('#stories-index', storyShow);
    })
  },

  initialize : function () {
    this.collection.fetch();
    this.listenTo(this.collection, "sync", this.render)
  }

})