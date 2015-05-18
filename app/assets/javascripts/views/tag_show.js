MediumClone.Views.TagShow = Backbone.CompositeView.extend({

  template : JST['tag_show'],

  render : function () {
    var rendered = this.template({
      tag : this.model,
    });

    this.$el.html(rendered);

    var thisView = this;

    var tagStories = new MediumClone.Collections.Stories([], {
      url : thisView.model.url() + '/stories',
    });
    
    tagStories.fetch();

    var tagStoriesIndex = new MediumClone.Views.StoriesIndex({
      collection : tagStories,
    });

    this.addSubview('#stories-index', tagStoriesIndex)
    return this;
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