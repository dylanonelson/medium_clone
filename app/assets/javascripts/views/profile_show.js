MediumClone.Views.ProfileShow = Backbone.CompositeView.extend(
  _.extend({}, MediumClone.Mixins.MediumProfileView, {

    template : JST['profile_show'],

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

    template : JST['profile_show'],

    _firstRender : true,

    render : function () {
      MediumClone.Mixins.MediumProfileView.render.bind(this)();
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