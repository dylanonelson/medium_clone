MediumClone.Collections.Tags = Backbone.Collection.extend({

  model : MediumClone.Models.Tag,

  initialize : function (models, options) {
    this.url = options.url;
  },

})