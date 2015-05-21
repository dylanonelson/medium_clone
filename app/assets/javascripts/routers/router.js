MediumClone.Routers.Router = Backbone.Router.extend({
  
  initialize : function (options) {
    this.$root = options.$root;
    
    MediumClone.tags.fetch();

    MediumClone.currentUser = new MediumClone.Models.CurrentUser();
    MediumClone.currentUser.fetch();

    var profileView = new MediumClone.Views.UserSidebar({
      model : MediumClone.currentUser,
    });

    $('#sidebar').append(profileView.render().$el);
  },

  routes : {
    '' : 'feed',
    'profile' : 'profile',
    'stories/new' : 'newStory',
    'stories/:id/edit' : 'editStory',
    'stories/:id' : 'showStory',
    'users/:id' : 'showUser',
    'tags/:id' : 'showTag',
  },

  feed : function () {
    MediumClone.feed.fetch();

    var feedView = new MediumClone.Views.StoriesIndex({
      collection : MediumClone.feed,
    })

    this._swapView(feedView);
  },

  profile : function () {
    MediumClone.currentUser.stories().fetch();

    var profileView = new MediumClone.Views.CurrentUserProfileShow({
      model : MediumClone.currentUser,
      collection : MediumClone.currentUser.stories(),
    });

    this._swapView(profileView);
  },

  newStory : function () {
    var newStoryView = new MediumClone.Views.StoryForm({
      model : new MediumClone.Models.Story(),
    });

    this._swapView(newStoryView);
  },

  editStory : function (id) {
    var forEditing = new MediumClone.Models.Story({
      id : id,
    });

    forEditing.fetch();

    var editStoryView = new MediumClone.Views.StoryForm({
      model : forEditing,
    });

    this._swapView(editStoryView);
  },

  showStory : function (id) {
    var showStoryView = new MediumClone.Views.StoryShow({
      model : MediumClone.stories.getOrFetch(id),
    });

    this._swapView(showStoryView);
  },

  showUser : function (id) {
    if (id === MediumClone.currentUser.id) {
      this.profile();
    }

    var user = new MediumClone.Models.User({
      id : id,
    });

    user.fetch();
    user.stories().fetch();
    
    var showUserView = new MediumClone.Views.ProfileShow({
      model : user,
      collection : user.stories(),
    });

    this._swapView(showUserView);
  },

  showTag : function (id) {
    var tag = MediumClone.tags.getOrFetch(id);
    tag.stories().fetch();

    var showTagView = new MediumClone.Views.TagShow({
      model : tag,
    });

    this._swapView(showTagView);
  },

  _swapView : function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$root.html(view.render().$el);
  },

})