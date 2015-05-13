window.MediumClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    MediumClone.stories = new MediumClone.Collections.Stories();

    MediumRouter = new MediumClone.Routers.Router({
      $root : $('#app'),
    });
    
    Backbone.history.start();
  }
};
