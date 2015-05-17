MediumClone.Views.UserShow = Backbone.CompositeView.extend({

  template : JST['user_show'],

  render : function () {
    var rendered = this.template({
      user : this.model,
    });

    this.$el.html(rendered);

    // If the user has published stories, display them
    // Otherwise, add an explanation
    if (this.collection.length > 0) {
      var storyIndexView = new MediumClone.Views.StoriesIndex({
        collection : this.collection,
      });

      this.addSubview('#stories-index', storyIndexView);
    } else {
      var $emptySummary = $('<p>');
      $emptySummary.addClass('empty-story-index');
      $emptySummary.text(this.model.get('username') + ' has no published stories.');
      this.$('#stories-index').append($emptySummary);
    }

    return this;
  },

  initialize : function () {
    this.model.fetch();
    this.collection.fetch();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'sync', this.render);
  },

})