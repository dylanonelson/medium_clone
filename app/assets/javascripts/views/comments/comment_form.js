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
    event && event.preventDefault();

    var thisView = this;

    if (!MediumClone.router._requireSignedIn(this.submitComment.bind(this))) { return; }

    thisView.model.set('body', thisView.$el.serializeJSON().body);
      thisView.model.save({}, {
        success : function () {
          thisView.collection.add(thisView.model);
        }
      });
      MediumClone.router.showStory(thisView.model.get('story_id'));
      Backbone.history.navigate('stories/' + thisView.model.get('story_id'));
  },

})