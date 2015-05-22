MediumClone.Views.StoriesIndex = Backbone.CompositeView.extend({

  tagName : 'section',

  template : JST['stories/stories_index'],

  render : function () {
    var rendered = this.template();
    this.$el.html(rendered);
    this.renderStories();
    return this;
  },

  renderStories : function () {
    var view = this;

    // If the there are stories in the collection, display them
    // Otherwise, add an explanation
    if (this.collection.length > 0) {
      this.collection.each(function (story) {
        var storySummary = new MediumClone.Views.StorySummary({
          model : story,
        });

        view.addSubview('#stories-index', storySummary);
      })
    } else {
      var $emptySummary = $('<p>');
      $emptySummary.addClass('empty-story-index');
      $emptySummary.text('There are no stories to display.');
      this.$('#stories-index').append($emptySummary);
    }
  },

  initialize : function () {
    this.listenTo(this.collection, "sync", this.render)
  },

})