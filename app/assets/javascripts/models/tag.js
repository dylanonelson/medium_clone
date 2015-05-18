MediumClone.Models.Tag = Backbone.Model.extend(
  _.extend({}, MediumClone.Mixins.Followable, {

    urlRoot : 'api/tags',

    followableType : 'Tag',

  })
)