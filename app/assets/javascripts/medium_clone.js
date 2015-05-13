window.MediumClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    MediumRouter = new MediumClone.Routers.Router({
      $root : $('#app'),
    });
    Backbone.history.start();
  }
};
