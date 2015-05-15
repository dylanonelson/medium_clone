MediumClone.Views.StoryShow = Backbone.CompositeView.extend({

  className : 'story-show',

  template : JST['story_show'],

  render : function () {
    console.log('rendered story show');
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
    'click .story-content' : 'toggleCommentForm',
  },

  syncStory : function () {
    this.model.fetch();
  },

  toggleCommentForm : function (event) {
    $currentTarget = $(event.currentTarget);

    this._commentForm && this._commentForm.remove();

    if (this._selectedEl) {
      this._selectedEl.toggleClass('selected-for-comment');
      if (this._selectedEl.data('id') === $currentTarget.data('id')) {
        return;
      }
    }
    
    this._selectedEl = $currentTarget;
    $currentTarget.toggleClass('selected-for-comment');
    
    var formView = new MediumClone.Views.CommentForm({
      model : this.model,
      fragment_id : $currentTarget.data('id'),
    });
    this._commentForm = formView;
    formView.render().$el.insertAfter($currentTarget);
  },

})