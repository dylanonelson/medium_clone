MediumClone.Models.Story = Backbone.Model.extend({

  urlRoot : 'api/stories',

  initialize : function (options) {
    if (options && options.author) {
      this.set('author', new MediumClone.Models.User(options.author));
      this.get('author').fetch();
    }
  },

})