MediumClone.Views.TagForm = Backbone.View.extend({

  template : JST['tag_form'],

  render : function () {
    var rendered = this.template({
      tags : this.collection,
    });

    this.$el.html(rendered);
    return this;
  },

  initialize : function () {
    this.collection.fetch();
    this.listenTo(this.collection, 'sync', this.render);
  },

  events : {
    'click .story_tag' : 'selectTag',
  },

})