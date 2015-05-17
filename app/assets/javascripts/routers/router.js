MediumClone.Routers.Router = Backbone.Router.extend({
  
  initialize : function (options) {
    this.$root = options.$root;
  },

  routes : {
    '' : 'feed',
    'stories' : 'indexStories',
    'stories/new' : 'newStory',
    'stories/:id' : 'showStory',
    'users/:id' : 'showUser',
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

    var userStories = new MediumClone.Collections.Stories({
      user : user,
    });
    
    var showUserView = new MediumClone.Views.UserShow({
      model : user,
      collection : userStories,
    });

    this._swapView(showUserView);
  },

  _swapView : function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$root.html(view.render().$el);
  },

})