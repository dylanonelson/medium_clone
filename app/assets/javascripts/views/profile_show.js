MediumClone.Views.ProfileShow = Backbone.CompositeView.extend({

  template : JST['profile_show'],

  render : function () {
    var rendered = this.template();

    this.$el.html(rendered);

    var storiesIndex = new MediumClone.Views.StoriesIndex({
      collection : MediumClone.stories,
    });

    this.addSubview('#current-user-stories', storiesIndex);

    return this;
  },

  initialize : function () {
    this.listenTo(MediumClone.currentUser, 'sync', this.render);
    this.listenTo(MediumClone.stories, 'sync', this.render);
  },

})