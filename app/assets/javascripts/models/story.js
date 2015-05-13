MediumClone.Models.Story = Backbone.Model.extend({

  urlRoot : 'api/stories',

  initialize : function (options) {
    if (options && options.author) {
      this.author = new MediumClone.Model.User({
        username : options.author.username,
      });
      this.author.fetch();
    }
  },

})