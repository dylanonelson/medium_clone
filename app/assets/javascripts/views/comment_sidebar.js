MediumClone.Views.CommentSidebar = Backbone.CompositeView.extend({

  tagName : 'div',

  className : 'comment-sidebar-frame',

  template : JST['comment_sidebar'],

  render : function () {
    thisView = this;
    var rendered = this.template();
    this.$el.html(rendered);

    var comments = this.model.get('comments').where({
      "fragment_id" : thisView.fragment_id,
    });

    comments.forEach(function (comment) {
      var showView = new MediumClone.Views.CommentShow({
        model : comment,
      });

      thisView.addSubview('.comment-sidebar', showView);
    })
    
    var formView = new MediumClone.Views.CommentForm({
      fragment_id : this.fragment_id,
      model : this.model,
    });

    this.addSubview('.comment-sidebar', formView);
    return this;
  },

  initialize : function (options) {
    this.fragment_id = options.fragment_id;
  },

})