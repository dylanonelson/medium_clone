MediumClone.Views.StoryShow = Backbone.CompositeView.extend({

  template : JST['story_show'],

  render : function () {
    view = this;

    var rendered = this.template({
      story : view.model,
      author : view.model.get("author"),
    })

    this.$el.html(rendered);
    this.model.get('comments') && this.renderComments();
    return this;
  },

  renderComments : function () {
    var thisView = this;

    this.model.get('comments').each(function (comment) {
      var showView = new MediumClone.Views.CommentShow({
        model : comment,
      });
      
      var fragmentSelector = '[data-id="' + comment.get('fragment_id') + '"]';
      thisView.addSubview(fragmentSelector, showView);
    })
  },

  initialize : function () {
    this.listenTo(this.model, "sync", this.render);
  },

  events : {
    'click .story-view' : 'syncStory',
  },

  syncStory : function () {
    this.model.fetch();
  },

})