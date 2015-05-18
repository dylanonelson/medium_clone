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
    'click button' : 'createTag',
  },

  createTag : function (event) {
    event.preventDefault();
    $currentTarget = $(event.currentTarget);

    var newTag = new MediumClone.Models.Tag({
      label : $('#new-tag-form').val(),
    });

    var thisView = this;

    newTag.save({}, {
      success : function () {
        thisView.collection.add(newTag);
      },
    });
  },

})