MediumClone.Models.User = Backbone.Model.extend({
  
  urlRoot : 'api/users',

  toggleFollow : function (completionCallback) {
    var type
    var thisModel = this;

    if (this.get('following')) {
      type = 'DELETE';
    } else {
      type = 'POST';
    }

    $.ajax({
      url : 'api/follow',
      type : type,
      data : {
        follow: {
          followed_id : thisModel.id,
        }
      },
      success : completionCallback,
    });
  },

})