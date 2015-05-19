MediumClone.Views.UserSidebar = Backbone.View.extend({

  tagName : 'section',

  className : 'user-sidebar',

  template : JST['user_sidebar'],

  render : function () {
    var rendered = this.template({
      user : MediumClone.currentUser,
    });

    this.$el.html(rendered);
    return this;
  },

  initialize : function () {
    this.listenTo(MediumClone.currentUser.followedAuthors, 'sync add remove', this.render);
    this.listenTo(MediumClone.tags, 'sync', this.render);
    this.listenTo(this.model, 'sync', this.render);
  },

})