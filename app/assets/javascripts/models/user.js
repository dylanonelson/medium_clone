MediumClone.Models.User = Backbone.Model.extend(
  _.extend({}, MediumClone.Mixins.Followable, {

    urlRoot : 'api/users',

    followableType : 'User',

  })
)