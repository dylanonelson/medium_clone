MediumClone.Models.Story = Backbone.Model.extend({

  urlRoot : 'api/stories',

  parse : function (payload) {
    this.set('author', new MediumClone.Models.User(payload.author));
    delete payload.author;

    this.set('tags', new MediumClone.Collections.Tags(payload.tags));
    delete payload.author;

    return payload;
  },

  getSummary : function () {
    var body = this.get('body');
    var summary = $('<div>').html(body);
    summary.html(summary.children().slice(0, 5));
    var teaser = $('<a>');
    teaser.attr('href', '#stories/' + this.id);
    teaser.addClass('teaser story-view')
    teaser.text('See more')
    summary.append(teaser);
    return summary.html();
  },

})