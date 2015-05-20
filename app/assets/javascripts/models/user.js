MediumClone.Models.User = Backbone.Model.extend(
  _.extend({}, MediumClone.Mixins.Followable, {

    urlRoot : 'api/users',

    followableType : 'User',

    parse : function (payload) {
      this.followedAuthors().set(payload.followed_authors);
      delete payload.followed_authors;

      this.followedTags().set(payload.followed_tags);
      delete payload.followed_tags;
      
      return payload;
    },

    followedAuthors : function () {
      if (this._followedAuthors) {
        return this._followedAuthors;
      }

      this._followedAuthors = new MediumClone.Collections.Users();
      return this._followedAuthors;
    },

    followedTags : function () {
      if (this._followedTags) {
        return this._followedTags;
      }

      this._followedTags = new MediumClone.Collections.Tags([], {
        url : 'api/tags',
      });
      return this._followedTags;
    },
    
  })
)

MediumClone.Models.CurrentUser = MediumClone.Models.User.extend({

  url : 'api/profile',

  stories : function () {
      if (this._stories) {
        return this._stories;
      }

      this._stories = new MediumClone.Collections.Stories([], {
        url : 'api/stories',
      });
      return this._stories;
    },

})