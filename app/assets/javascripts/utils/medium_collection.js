MediumClone.Mixins.MediumCollection = {
  getOrFetch : function (id) {
    if (this.get(id)) {
      return this.get(id);
    }

    var toFetch = new this.model({
      id : id,
    });

    var thisCollection = this;

    toFetch.fetch({
      success : function () {
        thisCollection.add(toFetch);
      },
    });

    return toFetch;
  },
}