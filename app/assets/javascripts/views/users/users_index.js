MediumClone.Views.UsersIndex = Backbone.View.extend({

  className : 'clearfix',

  template : JST['users/users_index'],

  render : function () {
    var rendered = this.template({
      users : this.collection,
    });

    this.$el.html(rendered);
    return this;
  },

  initialize : function () {
    
  },

})