MediumClone.Mixins.MediumProfileView = {

  render : function () {
    var rendered = this.template({
      user : this.model,
    });

    this.$el.html(rendered);

    var storiesIndex = new MediumClone.Views.StoriesIndex({
      collection : this.collection,
    });

    this.addSubview('#current-user-stories', storiesIndex);

    return this;
  },

  initialize : function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'sync', this.render);
  },
  
}