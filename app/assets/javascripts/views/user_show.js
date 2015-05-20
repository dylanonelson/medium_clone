MediumClone.Views.UserShow = Backbone.CompositeView.extend({

  template : JST['user_show'],

  render : function () {
    var rendered = this.template({
      user : this.model,
    });

    this.$el.html(rendered);
    this.renderStories();
    return this;
  },

  // renderStories : function () {
  //   var storyIndexView = new MediumClone.Views.StoriesIndex({
  //     collection : this.collection,
  //   });

  //   this.addSubview('#stories-index', storyIndexView);
  // },

  // initialize : function () {
  //   this.listenTo(this.model, 'sync', this.render);
  //   this.listenTo(this.collection, 'sync', this.render);
  // },

  // events : {
  //   'click .follow-user-button' : 'toggleFollowUser',
  // },

  // toggleFollowUser : function (event) {
  //   var thisView = this;
  //   this.model.toggleFollow(function () {
  //     if (thisView.model.get('following')) { 
  //       MediumClone.currentUser.followedAuthors.remove(thisView.model.id);
  //     } else {
  //       MediumClone.currentUser.followedAuthors.add(thisView.model);
  //     }
  //     thisView.model.fetch();
  //   });
  // },

})