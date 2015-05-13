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
    this.model.fetch();
    this.listenTo(this.model, 'sync', this.render);
  },

  events : {
    "click .view-story-link" : "viewStory",
  },

  viewStory : function (event) {
    event.preventDefault();
    $currentTarget = $(event.currentTarget);
    Backbone.history.navigate('stories/' + $currentTarget.data('id'), { trigger : true });
  }

})