window.MediumClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Backbone.history.start();
    MediumRouter = new MediumClone.Routers.Router({
      $root : $('#app'),
    });
  }
};
