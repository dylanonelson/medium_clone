MediumClone.Views.StoryShow = Backbone.View.extend({

  template : JST['story_show'],

  render : function () {
    view = this;

    var rendered = this.template({
      story : view.model,
      author : view.model.get("author"),
    })

    this.$el.html(rendered);
    return this;
  },

  initialize : function () {
    this.listenTo(this.model, "sync", this.render);
  },

})