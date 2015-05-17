MediumClone.Collections.Stories = Backbone.Collection.extend({

  model : MediumClone.Models.Story,

  url : function () {
    if (this.user) {
      return this.user.url() + '/stories';
    }
    return 'api/stories';
  },

  initialize : function (options) {
    if (options) {
      this.user = options.user
    }
  },

  getOrFetch : function (id) {
    if (this.get(id)) {
      return this.get(id);
    }

    var toFetch = new this.model({
      id : id,
    });

    var thisCollection = this;

    toFetch.fetch({
      success : function () {
        thisCollection.add(toFetch);
      },
    });

    return toFetch;
  },

})