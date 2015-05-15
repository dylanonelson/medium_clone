MediumClone.Views.CommentShow = Backbone.View.extend({

  tagName : 'figure',

  className : 'comment-view',

  template : JST['comment_show'],

  render : function  () {
    var rendered = this.template({
      comment : this.model,
    });

    this.$el.html(rendered);
    return this;
  },

  // initialize : function () {
  //   this.listenTo(this.model, 'sync', this.render)
  // },

})