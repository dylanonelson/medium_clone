MediumClone.Collections.Tags = Backbone.Collection.extend(
  _.extend({}, MediumClone.Mixins.MediumCollection, {

    model : MediumClone.Models.Tag,

    initialize : function (models, options) {
      this.url = options.url;
    },

  })
)