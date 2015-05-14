MediumClone.Models.Story = Backbone.Model.extend({

  urlRoot : 'api/stories',

  parse : function (payload) {
    this.set('author', new MediumClone.Models.User(payload.author));
    delete payload.author;

    this.set('comments', new MediumClone.Collections.Comments(payload.comments));
    delete payload.comments;

    return payload;
  },

})