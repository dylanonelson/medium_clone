MediumClone.Views.SessionForm = Backbone.View.extend({

  template : JST['users/session_form'],

  className : 'session-form-frame',

  render : function () {
    var rendered = this.template();
    this.$el.html(rendered);
    return this;
  },

  initialize : function (options) {
    this.callback = options.callback;
    this.listenTo(MediumClone.currentUser, "signIn", this.signInCallback);
  },

  events : {
    'submit form' : 'submit',
    'click #demo-user-link' : 'signInAsMarshall',
  },

  submit : function (event) {
    event.preventDefault();
    
    var $form = $(event.currentTarget);
    var formData = $form.serializeJSON().user;
    var $errors = $('#errors');

    MediumClone.currentUser.signIn({
      username : formData.username,
      password : formData.password,
      error : function (xhr) {
        $errors.empty();
        $errors.removeClass('gone');

        var errors = xhr.responseJSON.errors;
        errors.forEach(function  (error) {
          $error = $('<li>').text(error);
          $errors.append($error);
        })
      },
    });
  },

  signInAsMarshall : function (event) {
    event.preventDefault();
    MediumClone.currentUser.signIn({
      username : 'marshall',
      password : 'mmcluhan'
    });
  },

  signInCallback: function(event){
    if(this.callback) {
      this.callback();
    } else {
      Backbone.history.navigate('feed', { trigger : true });
    }
  }

})