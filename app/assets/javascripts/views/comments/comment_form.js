MediumClone.Views.CommentForm = Backbone.View.extend({

  tagName : 'form',

  className : 'comment-form',

  template : JST['comments/comment_form'],

  render : function () {
    var rendered = this.template();

    this.$el.html(rendered);
    return this;
  },

  initialize : function (options) {
    this.fragment_id = options.fragment_id;
    this.story_id = options.story_id;
  },

  events : {
    'click button' : 'submitComment',
  },

  submitComment : function (event) {
    event.preventDefault();

    var thisView = this;

    this.model.set('body', this.$el.serializeJSON().body);
    this.model.save({}, {
      success : function () {
        thisView.collection.add(thisView.model);
      }
    });
  },

})