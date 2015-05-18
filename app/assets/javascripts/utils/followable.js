MediumClone.Mixins.Followable = {
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
          followable_id : thisModel.id,
          followable_type : thisModel.followableType,
        }
      },
      success : completionCallback,
    });
  },
}