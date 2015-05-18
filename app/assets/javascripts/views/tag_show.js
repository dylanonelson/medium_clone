MediumClone.Views.TagShow = Backbone.CompositeView.extend({

  template : JST['tag_show'],

  render : function () {
    var rendered = this.template({
      tag : this.model,
    });

    this.$el.html(rendered);
    this.renderStories();
    return this;
  },

  renderStories : function () {
    var tagStoriesIndex = new MediumClone.Views.StoriesIndex({
      collection : this.collection,
    });

    this.addSubview('#stories-index', tagStoriesIndex)
  },

  initialize : function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  events : {
    'click button' : 'toggleFollowTag',
  },

  toggleFollowTag : function (event) {
    var thisView = this;
    this.model.toggleFollow(function () {
      thisView.model.fetch();
    });
  },

})