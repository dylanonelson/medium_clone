MediumClone.Views.UserShow = Backbone.CompositeView.extend({

  template : JST['user_show'],

  render : function () {
    var rendered = this.template({
      user : this.model,
    });

    this.$el.html(rendered);

    var storyIndexView = new MediumClone.Views.StoriesIndex({
      collection : this.collection,
    });

    this.addSubview('#stories-index', storyIndexView);

    return this;
  },

  initialize : function () {
    this.model.fetch();
    this.collection.fetch();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'sync', this.render);
  },

  events : {
    'click .follow-user-button' : 'toggleFollowUser',
  },

  toggleFollowUser : function (event) {
    var thisView = this;
    this.model.toggleFollow(function () {
      thisView.model.fetch();
    });
  },

})