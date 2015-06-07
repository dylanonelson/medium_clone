MediumClone.Views.TagsIndex = Backbone.View.extend({

  template : JST['tags/tags_index'],

  render : function () {
    var rendered = this.template({
      tags : this.collection,
    });

    this.$el.html(rendered);
    return this;
  },

  initialize : function () {
    
  },

})