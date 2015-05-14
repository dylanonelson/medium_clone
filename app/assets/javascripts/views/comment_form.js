MediumClone.Views.CommentForm = Backbone.View.extend({

  tagName : 'form',

  className : 'comment-form',

  template : JST['comment_form'],

  render : function () {
    var rendered = this.template();

    this.$el.html(rendered);
    return this;
  },

  initialize : function (options) {
    this.fragment_id = options.fragment_id;
  },

  events : {
    'click button' : 'submitComment',
  },

  submitComment : function (event) {
    event.preventDefault();

    var thisView = this;

    var newComment = new MediumClone.Models.Comment({
      story_id : thisView.model.id,
      fragment_id : thisView.fragment_id,
      body : thisView.$el.serializeJSON().body,
    });

    var thisModel = this.model;
    newComment.save({}, {
      success : function (saved) {
        thisModel.get('comments').add(saved);
        thisModel.trigger('sync');
      },
    });
  },

})