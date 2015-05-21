MediumClone.Views.UserForm = Backbone.View.extend({

  template : JST['user_form'], 

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
    newUser.save({}, {
      success : function(userData) {
        MediumClone.currentUser.set(userData);
        MediumClone.currentUser.trigger('signIn');
        MediumClone.currentUser.fetch({
          success : function() {
            Backbone.history.navigate('#profile', { trigger : true });
          },
        })
      },
    });
  }

})