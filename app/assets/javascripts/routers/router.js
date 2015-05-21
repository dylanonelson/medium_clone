MediumClone.Routers.Router = Backbone.Router.extend({
  
  initialize : function (options) {
    this.$root = options.$root;
    this.$sidebar = options.$sidebar;
    MediumClone.tags.fetch();
    MediumClone.currentUser.fetch();
    this.listenTo(MediumClone.currentUser, 'signIn', this._renderSidebar);
    this.listenTo(MediumClone.currentUser, 'signOut', this._removeSidebar);
  },

  routes : {
    '' : 'welcome',
    'feed' : 'feed',
    'profile' : 'profile',
    'stories/new' : 'newStory',
    'stories/:id/edit' : 'editStory',
    'stories/:id' : 'showStory',
    'users/:id' : 'showUser',
    'tags/:id' : 'showTag',
  },

  welcome : function () {
    this.$root.html('<p>Welcome to Medium</p>');
  },

  feed : function () {
    if (!this._requireSignedIn(this.feed.bind(this))) { return; }

    MediumClone.feed.fetch();

    var feedView = new MediumClone.Views.StoriesIndex({
      collection : MediumClone.feed,
    })

    this._swapView(feedView);
  },

  profile : function () {
    if (!this._requireSignedIn(this.profile.bind(this))) { return; }

    MediumClone.currentUser.stories().fetch();

    var profileView = new MediumClone.Views.CurrentUserProfileShow({
      model : MediumClone.currentUser,
      collection : MediumClone.currentUser.stories(),
    });

    this._swapView(profileView);
  },

  newStory : function () {
    if (!this._requireSignedIn(this.newStory.bind(this))) { return; }

    var newStoryView = new MediumClone.Views.StoryForm({
      model : new MediumClone.Models.Story(),
    });

    this._swapView(newStoryView);
  },

  editStory : function (id) {
    if (!this._requireSignedIn(this.editStory.bind(this))) { return; }

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
    if (id == MediumClone.currentUser.id) {
      this.profile();
      return
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

  signIn : function (callback) {
    var sessionForm = new MediumClone.Views.SessionForm({
      callback : callback
    });
    this._swapView(sessionForm);
  },

  _swapView : function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$root.html(view.render().$el);
  },

  _requireSignedIn : function (callback) {
    if (!MediumClone.currentUser.isSignedIn()) {
      callback = callback;
      this.signIn(callback);
      return false;
    }

    return true;
  },

  _renderSidebar : function () {
    if (!this._sidebar) {
      this._sidebar = new MediumClone.Views.UserSidebar({
        model : MediumClone.currentUser,
      });
      this.$sidebar.append(this._sidebar.render().$el).removeClass('hidden');
    }
  },

  _removeSidebar : function () {
    if (this._sidebar) {
      this._sidebar.remove();
      delete this._sidebar;
      this.$sidebar.addClass('hidden');
    }
  },
})