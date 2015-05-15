MediumClone.Views.StorySummary = Backbone.View.extend({

  template : JST['story_show'],

  render : function () {
    var summaryBody = this.model.getSummary();

    var rendered = this.template({
      story : this.model,
      author : this.model.get('author'),
      body : summaryBody,
    });

    this.$el.html(rendered);
    return this;
  },

})