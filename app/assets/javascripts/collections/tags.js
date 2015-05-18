MediumClone.Collections.Tags = Backbone.Collection.extend({

  model : MediumClone.Models.Tag,

  url : function () {
    if (this.story) {
      return this.story.url() + '/tags';
    }

    return 'api/tags';
  },

  initialize : function (options) {
    if (options && options.story) {
      this.story = options.story;
    }
  }

})