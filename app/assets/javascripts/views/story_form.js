MediumClone.Views.StoryForm = Backbone.View.extend({

  template : JST['story_form'],

  render : function () {
    var rendered = this.template({
      story : new MediumClone.Models.Story(),
    })

    this.$el.html(rendered);
    return this;
  },

})