MediumClone.Views.LoggedInStatus = Backbone.View.extend({
  
  template : JST['logged_in_status'],

  render : function () {
    var rendered = this.template({
      user : MediumClone.currentUser,
    });

    this.$el.html(rendered);
    return this;
  },

  initialize : function () {
    this.listenTo(MediumClone.currentUser, 'change', this.render);
  },

})