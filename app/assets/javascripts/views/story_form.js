MediumClone.Views.StoryForm = Backbone.View.extend({

  tagName : 'form',

  className : 'story-form',

  template : JST['story_form'],

  render : function () {
    var rendered = this.template({
      story : new MediumClone.Models.Story(),
    })

    this.$el.html(rendered);
    return this;
  },

  events : {
    "click #submit-story" : "submitStory",
  },

  submitStory : function (event) {
    event.preventDefault();
    var attr = this.$el.serializeJSON();
    this.model.save(attr, {
      success : function () {
        Backbone.history.navigate('', { trigger : true });
      },
    });
  },

})