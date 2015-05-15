MediumClone.Views.StoryShow = Backbone.CompositeView.extend({

  className : 'story-show',

  template : JST['story_show'],

  render : function () {
    view = this;

    var rendered = this.template({
      story : view.model,
      author : view.model.get('author'),
      body : view.model.get('body'),
    })

    this.$el.html(rendered);
    this.showCommentCounts();
    return this;
  },

  initialize : function () {
    this.comments = new MediumClone.Collections.Comments({
      story : this.model,
    });
    this.comments.fetch();

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
      collection : this.comments,
      fragment_id : $currentTarget.data('id'),
    });

    this._commentForm = sidebarView;
    sidebarView.render().$el.insertAfter($currentTarget);
  },

  showCommentCounts : function () {
    var thisView = this;

    this.$('article').children().each(function (index, fragment) {
      var count = thisView.commentCountOf(fragment);
      if (count > 0) {
        var countEl = $('<figure>');
        countEl.addClass('comment-count');
        countEl.text(thisView.commentCountOf(fragment));
        $fragment = $(fragment);
        $fragment.append(countEl);
      }
    })
  },
 
  commentCountOf : function (fragment) {
    var fragmentId = $(fragment).data('id');
    if (typeof fragmentId === typeof undefined) {
      return 0;
    }

    return this.comments.where({
      fragment_id : fragmentId,
    }).length;
  },

})