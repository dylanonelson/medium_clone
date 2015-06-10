MediumClone.Views.UserForm = Backbone.View.extend({

  template : JST['users/user_form'], 

  className : 'user-form-frame',

  render : function () {
    var rendered = this.template();
    this.$el.html(rendered);
    return this;
  },

  events : {
    'submit form' : 'createUser',
  },

  createUser : function () {
    event.preventDefault();
    var userData = this.$('form').serializeJSON();
    var newUser = new MediumClone.Models.User(userData);
    var $errors = this.$('#errors');

    newUser.save({}, {
      success : function(userData) {
        $errors.addClass('gone');

        MediumClone.currentUser.set(userData);
        MediumClone.currentUser.trigger('signIn');
        MediumClone.currentUser.fetch({
          success : function() {
            Backbone.history.navigate('#profile', { trigger : true });
          },
        })
      },
      error : function (userData, xhr) {
        $errors.empty();
        $errors.removeClass('gone');

        var errors = xhr.responseJSON.errors;
        errors.forEach(function (error) {
          $error = $('<li>').text(error + '.');
          $errors.append($error);
        })
      }
    });
  }

})