MediumClone.Routers.Router = Backbone.Router.extend({
  
  initialize : function (options) {
    this.$root = options.$root;
  },

  routes : {
    '' : 'indexStories',
    'stories/new' : 'newStory',
    'stories/:id' : 'showStory',
  },

  indexStories : function  () {
    var indexStoriesView = new MediumClone.Views.StoriesIndex({
      collection : new MediumClone.Collections.Stories(),
    });

    this._swapView(indexStoriesView);
  },

  newStory : function () {
    var newStoryView = new MediumClone.Views.StoryForm({
      model : new MediumClone.Models.Story(),
    })

    this._swapView(newStoryView);
  },

  _swapView : function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$root.html(view.render().$el);
  },

})