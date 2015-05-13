window.MediumClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    MediumClone.stories = new MediumClone.Collections.Stories();
    MediumClone.stories.fetch();

    MediumRouter = new MediumClone.Routers.Router({
      $root : $('#app'),
    });
    
    Backbone.history.start();
  }
};
