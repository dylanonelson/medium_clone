MediumClone.Views.StoryShow = Backbone.CompositeView.extend({

  className : 'story-show',

  template : JST['story_show'],

  render : function () {
    console.log('rendered story show');
    view = this;

    var rendered = this.template({
      story : view.model,
      author : view.model.get('author'),
      body : view.model.get('body'),
    })

    this.$el.html(rendered);
    return this;
  },

  initialize : function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  events : {
    'click .story-content' : 'toggleCommentForm',
  },

  toggleCommentForm : function (event) {
    $currentTarget = $(event.currentTarget);

    this._commentForm && this._commentForm.remove();

    // Remove highlight from previously selected class
    // Return if the selected element was already selected
    if (this._selectedEl) {
      this._selectedEl.toggleClass('selected-for-comment');
      if (this._selectedEl.data('id') === $currentTarget.data('id')) {
        return;
      }
    }
    
    this._selectedEl = $currentTarget;
    $currentTarget.toggleClass('selected-for-comment');
    
    var sidebarView = new MediumClone.Views.CommentSidebar({
      model : this.model,
      fragment_id : $currentTarget.data('id'),
    });

    this._commentForm = sidebarView;
    sidebarView.render().$el.insertAfter($currentTarget);
  },

})