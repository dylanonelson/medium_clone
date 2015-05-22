window.MediumClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Mixins: {},
  initialize: function() {
    
    MediumClone.currentUser = new MediumClone.Models.CurrentUser();

    MediumClone.stories = new MediumClone.Collections.Stories([], {
      url : 'api/stories',
    });

    MediumClone.feed = new MediumClone.Collections.Stories([], {
      url : 'api/feed',
    });

    MediumClone.tags = new MediumClone.Collections.Tags([], {
      url : 'api/tags',
    });

    MediumClone.router = new MediumClone.Routers.Router({
      $root : $('#app'),
      $sidebar : $('#sidebar'),
      $status : $('#logged-in-status'),
    });
    
    Backbone.history.start();
  }
};
