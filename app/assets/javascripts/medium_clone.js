window.MediumClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    MediumClone.stories = new MediumClone.Collections.Stories([], {
      url : 'api/stories',
    });

    MediumClone.feed = new MediumClone.Collections.Stories([], {
      url : 'api/feed',
    });

    MediumClone.tags = new MediumClone.Collections.Tags([], {
      url : 'api/tags',
    });

    MediumRouter = new MediumClone.Routers.Router({
      $root : $('#app'),
    });
    
    Backbone.history.start();
  }
};
