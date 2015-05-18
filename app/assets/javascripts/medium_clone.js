window.MediumClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    MediumClone.stories = new MediumClone.Collections.Stories();

    MediumClone.feed = new MediumClone.Collections.Stories({
      feed : true,
    });

    MediumClone.tags = new MediumClone.Collections.Tags();

    MediumRouter = new MediumClone.Routers.Router({
      $root : $('#app'),
    });
    
    Backbone.history.start();
  }
};
