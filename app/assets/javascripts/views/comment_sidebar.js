MediumClone.Views.CommentSidebar = Backbone.CompositeView.extend({

  tagName : 'div',

  className : 'comment-sidebar-frame',

  template : JST['comment_sidebar'],

  render : function () {
    thisView = this;
    var rendered = this.template();
    this.$el.html(rendered);

    var fragmentComments = this.collection.where({
      "fragment_id" : thisView.fragment_id,
    });

    fragmentComments.forEach(function (comment) {
      var showView = new MediumClone.Views.CommentShow({
        model : comment,
      });

      thisView.addSubview('.comment-sidebar', showView);
    })
    
    var newComment = new MediumClone.Models.Comment({
      story_id : this.collection.story.id,
      fragment_id : this.fragment_id,
    });

    this.collection.add(newComment);

    var formView = new MediumClone.Views.CommentForm({
      model : newComment,
    });

    this.addSubview('.comment-sidebar', formView);
    return this;
  },

  initialize : function (options) {
    this.fragment_id = options.fragment_id;
    this.listenTo(this.collection, 'sync', this.render);
  },

})