MediumClone.Views.StorySummary = Backbone.View.extend({

  template : JST['stories/story_summary'],

  render : function () {
    var summaryBody = this.model.getSummary();

    var rendered = this.template({
      story : this.model,
      storySummary : summaryBody,
    });

    this.$el.html(rendered);
    return this;
  },

})