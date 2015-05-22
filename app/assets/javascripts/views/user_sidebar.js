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
    this.listenTo(MediumClone.router, 'route', this.slide);
  },

  events : {
    'click #log-out' : 'logCurrentUserOut',
  },

  logCurrentUserOut : function (event) {
    event.preventDefault();
    MediumClone.currentUser.signOut({
      success : function () {
        MediumClone.router.welcome();
      },
    });
  },

  slide : function (route, params) {
    if (route === "showStory") {
      this.$el.parent().addClass('slide-out');
    } else {
      this.$el.parent().removeClass('slide-out');
    }
  },
  
})