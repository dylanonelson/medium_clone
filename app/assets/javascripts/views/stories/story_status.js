MediumClone.Views.StoryStatus = Backbone.View.extend({

  template : JST['stories/story_status'],

  render : function () {
    var rendered = this.template({
      story : this.model,
    });
    
    this.$el.html(rendered);

    if (this.model.get('banner_url')) {
      this.$('.banner-preview').css('background', 'url(' + this.model.get('banner_url').summary + ')' + ' 50% 50%').css('background-size', 'cover');
    } else {
      this.$('.banner-preview').text('No banner image selected.').addClass('missing-banner-text');
    }

    return this;
  },

  initialize : function () {
    this.listenTo(this.model, 'sync', this.render);
  },

})