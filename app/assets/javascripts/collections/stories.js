MediumClone.Collections.Stories = Backbone.Collection.extend(
  _.extend({}, MediumClone.Mixins.MediumCollection, {

    model : MediumClone.Models.Story,

    initialize : function (models, options) {
      this.url = options.url;
    },

  })
)