MediumClone.Models.Comment = Backbone.Model.extend({

  initialize : function (options) {
    this.set('commenter', new MediumClone.Models.User(options.commenter));
    this.get('commenter').fetch();
  },

})