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
    'stories' : 'indexStories',
    'stories/new' : 'newStory',
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

  indexStories : function  () {
    MediumClone.stories.fetch();

    var indexStoriesView = new MediumClone.Views.StoriesIndex({
      collection : MediumClone.stories,
    });

    this._swapView(indexStoriesView);
  },

  newStory : function () {
    MediumClone.tags.fetch();

    var newStoryView = new MediumClone.Views.StoryForm({
      model : new MediumClone.Models.Story(),
    })

    this._swapView(newStoryView);
  },

  showStory : function (id) {
    var showStoryView = new MediumClone.Views.StoryShow({
      model : MediumClone.stories.getOrFetch(id),
    });

    this._swapView(showStoryView);
  },

  showUser : function (id) {
    var user = new MediumClone.Models.User({
      id : id,
    });

    var userStories = new MediumClone.Collections.Stories([], {
      url : user.url() + '/stories',
    });

    user.fetch();
    userStories.fetch();
    
    var showUserView = new MediumClone.Views.UserShow({
      model : user,
      collection : userStories,
    });

    this._swapView(showUserView);
  },

  showTag : function (id) {
    var tag = MediumClone.tags.getOrFetch(id);

    var tagStories = new MediumClone.Collections.Stories([], {
      url : tag.url() + '/stories',
    });

    tagStories.fetch();

    var showTagView = new MediumClone.Views.TagShow({
      model : tag,
      collection : tagStories,
    });

    this._swapView(showTagView);
  },

  _swapView : function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$root.html(view.render().$el);
  },

})