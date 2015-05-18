MediumClone.Views.TagIndex = Backbone.View.extend({

  tagName : 'div',

  template : JST['tag_index'],

  render : function () {
    var rendered = this.template({
      tags : this.collection,
    });

    this.$el.html(rendered);
    return this;
  },

  initialize : function() {
    this.collection.fetch();
    this.listenTo(this.collection, 'sync', this.render);
  },

})