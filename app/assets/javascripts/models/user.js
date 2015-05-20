MediumClone.Models.User = Backbone.Model.extend(
  _.extend({}, MediumClone.Mixins.Followable, {

    urlRoot : 'api/users',

    followableType : 'User',

  })
)

MediumClone.Models.CurrentUser = MediumClone.Models.User.extend({

  url : 'api/profile',

  initialize : function () {
    this.set('followedAuthors', new MediumClone.Collections.Users());
  },

  parse : function (payload) {
    this.get('followedAuthors').set(payload.followed_authors);
    delete payload.followed_authors;
    return payload;
  },

  followedTags : function () {
    return MediumClone.tags.where({
      following : true,
    });
  },

})