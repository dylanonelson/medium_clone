MediumClone.Views.Search = Backbone.View.extend({

  tagName : 'form',

  className : 'search-form clearfix',

  template : JST['trends/search'],

  render : function () {
    var rendered = this.template();
    this.$el.html(rendered);
    return this;
  },

  initialize : function () {
  },

  events : {
    'submit' : 'triggerSearch',
  },

  triggerSearch : function (event) {
    event.preventDefault();
    var query = this.$el.serializeJSON().search_query;
    this.search(query);    
  },

  search : function (query) {
    var $body = $('body');
    $body.addClass('loading');

    $.ajax({
      url : 'api/search',
      type : 'GET',
      data : {
        query : query,
      },
      success : function (results) {
        $body.removeClass('loading');
        Backbone.history.navigate('search?query=' + query);
        MediumClone.router.searchResults(results);
      }
    });
  },

})