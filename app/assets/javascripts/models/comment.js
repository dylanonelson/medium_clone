MediumClone.Models.Comment = Backbone.Model.extend({

  urlRoot : 'api/comments',
 
  initialize : function (options) {
    options.commenter && this.set('commenter', new MediumClone.Models.User(options.commenter));
  },

  parse : function (payload) {
    payload.commenter && this.set('commenter', new MediumClone.Models.User(payload.commenter));
    delete payload.commenter;

    return payload;
  },

})