MediumClone.Views.ProfileShow = Backbone.CompositeView.extend(
  _.extend({}, MediumClone.Mixins.MediumProfileView, {

    template : JST['users/profile_show'],

    render : function () {
      MediumClone.Mixins.MediumProfileView.render.bind(this)();

      var followFormView = new MediumClone.Views.FollowForm({
        model : this.model,
      });

      this.addSubview('#current-user-stats-frame', followFormView, true);
      return this;
    },

  })
);

MediumClone.Views.CurrentUserProfileShow = Backbone.CompositeView.extend(
  _.extend({}, MediumClone.Mixins.MediumProfileView, {

    template : JST['users/profile_show'],

    _firstRender : true,

    render : function () {
      
      var rendered = this.template({
        user : this.model,
      });

      this.$el.html(rendered);

      var drafts = this.model.stories().where({
        published : false,
      });

      var published = this.model.stories().where({
        published : true,
      });

      var draftsIndex = new MediumClone.Views.StoriesIndex({
        collection : new MediumClone.Collections.Stories(drafts, {
          url : 'api/stories',
        }),
      });

      var publishedIndex = new MediumClone.Views.StoriesIndex({
        collection : new MediumClone.Collections.Stories(published, {
          url : 'api/stories',
        }),
      });

      this.addSubview('#current-user-drafts', draftsIndex);
      this.addSubview('#current-user-stories', publishedIndex);

      this.$('#current-user-drafts').removeClass('gone')
      this.$('.current-user-avatar-frame').addClass('avatar-upload-hover');
      return this;
    },

    events : {
      'click .current-user-avatar-frame' : 'uploadAvatar',
      'change #current-user-avatar' : 'changeAvatar',
    },

    uploadAvatar : function (event) {
      $('#current-user-avatar').trigger('click');
    },

    changeAvatar : function (event) {
      event.preventDefault();
      var reader = new FileReader();
      var file = event.currentTarget.files[0];

      reader.onloadend = function () {
        $.ajax({
          url : "api/user/",
          type : "PUT",
          data : {
            user : {
              avatar : reader.result,
            }
          },
          success : function () {
            MediumClone.currentUser.fetch();
          },
        })
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    },

  })
);