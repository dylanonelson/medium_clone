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
    this.listenTo(MediumClone.currentUser, 'sync', this.render);
    this.listenTo(MediumClone.currentUser.followedAuthors(), 'sync add remove', this.render);
    this.listenTo(MediumClone.currentUser.followedTags(), 'sync add remove', this.render);
    this.listenTo(MediumClone.currentUser, 'signIn', this.slideIn);
    this.listenTo(MediumClone.currentUser, 'signOut', this.slideOut);
  },

  events : {
    'click #log-out' : 'logCurrentUserOut',
  },

  logCurrentUserOut : function (event) {
    event.preventDefault();
    MediumClone.currentUser.signOut({
      success : function () {
        Backbone.history.navigate('', { trigger : true });
      },
    });
  },

  slideIn : function () {
    this.$el.parent().removeClass('slide-out');
  },

  slideOut : function () {
    this.$el.parent().addClass('slide-out');
  },

})