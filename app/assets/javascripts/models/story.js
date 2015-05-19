MediumClone.Models.Story = Backbone.Model.extend({

  urlRoot : 'api/stories',

  numWordsInSummary : 50,

  parse : function (payload) {
    this.set('author', new MediumClone.Models.User(payload.author));
    delete payload.author;

    return payload;
  },

  toJSON : function () {
    var json = {story: _.clone(this.attributes)};

    if (this._banner) {
      json.story.banner = this._banner
    }

    return json;
  },

  getSummary : function () {
    var $body = $(this.get('body'));
    
    var $summary = $('<div>');
    var summary = $body.text().match(/\S+/g).slice(0, this.numWordsInSummary).join(" ");

    // Add an ellipsis to end of summary text
    for (var i = 0; i < 3; i++) {
      summary += (String.fromCharCode(160) + ".");
    };

    $summary.append($('<p>').text(summary));

    var $teaser = $('<a>');
    $teaser.attr('href', '#stories/' + this.id);
    $teaser.addClass('teaser story-view')
    $teaser.text('See more')
    
    $summary.append($teaser);
    return $summary.html();
  },

})