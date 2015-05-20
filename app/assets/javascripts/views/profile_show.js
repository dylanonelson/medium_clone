MediumClone.Views.ProfileShow = Backbone.CompositeView.extend({

  template : JST['profile_show'],

  render : function () {
    var rendered = this.template();

    this.$el.html(rendered);

    var storiesIndex = new MediumClone.Views.StoriesIndex({
      collection : MediumClone.stories,
    });

    this.addSubview('#current-user-stories', storiesIndex);

    return this;
  },

  initialize : function () {
    this.listenTo(MediumClone.currentUser, 'sync', this.render);
    this.listenTo(MediumClone.stories, 'sync', this.render);
  },

  events : {
    'click .current-user-avatar' : 'uploadAvatar',
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