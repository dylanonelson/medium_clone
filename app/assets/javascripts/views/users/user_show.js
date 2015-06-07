MediumClone.Views.UserShow = Backbone.CompositeView.extend({

  template : JST['users/user_show'],

  render : function () {
    var rendered = this.template({
      user : this.model,
    });

    this.$el.html(rendered);
    this.renderStories();
    return this;
  },
  
})