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

  initialize : function () {
    this.listenTo(this, 'change', this.fireSessionEvent)
  },

  stories : function () {
    if (this._stories) {
      return this._stories;
    }

    this._stories = new MediumClone.Collections.Stories([], {
      url : 'api/stories',
    });
    return this._stories;
  },

  isSignedIn : function () {
    return !this.isNew();
  },

  signIn : function (options) {
    var thisModel = this;
    var credentials = {
      'user[username]' : options.username,
      'user[password]' : options.password,
    };

    $.ajax({
      url : 'api/session',
      type : 'POST',
      dataType : 'json',
      data : credentials,
      success : function (data) {
        thisModel.set(data);
        thisModel.followedAuthors().set(data.followed_authors);
        thisModel.followedTags().set(data.followed_tags);
        options.success && options.success();
      },
      error : function () {
        options.error && options.error();
      },
    })
  },

  signOut : function (options) {
    var thisModel = this;

    $.ajax({
      url : 'api/session',
      type : 'DELETE',
      dataType : 'json',
      success : function () {
        thisModel.clear();
        options.success && options.success();
      },
    });
  },

  fireSessionEvent: function(){
    if(this.isSignedIn()){
      this.trigger("signIn");
    } else {
      this.trigger("signOut");
    }
  },
})