MediumClone.Views.StoryForm = Backbone.CompositeView.extend({

  tagName : 'form',

  className : 'new_story',

  template : JST['story_form'],

  render : function () {
    var rendered = this.template({
      story : new MediumClone.Models.Story(),
    })

    this.$el.html(rendered);

    var tagFormView = new MediumClone.Views.TagForm({
      collection : MediumClone.tags,
    });

    this.addSubview('#tag-form-view', tagFormView);

    return this;
  },

  initialize : function () {
    this.render();

    this.listenTo(this.model, 'sync', this.render);
    this.assignedIds = [];
  },

  events : {
    "click #publish-story" : "publishStory",
    "click #upload-banner" : "uploadBanner",
    "change #upload-banner-input" : 'bannerUploadChange',
  },

  publishStory : function (event) {
    event.preventDefault();

    this.setContent();

    var thisModel = this.model;
    thisModel.set(this.$el.serializeJSON().story);

    thisModel.save({}, {
      success : function () {
        MediumClone.stories.add(thisModel);
      },
    });
    Backbone.history.navigate('', { trigger : true });
  },

  uploadBanner : function (event) {
    event.preventDefault();
    $('#upload-banner-input').trigger('click');
  },

  bannerUploadChange : function (event) {
    var reader = new FileReader();
    var file = event.currentTarget.files[0];

    var thisView = this;

    reader.onloadend = function () {
      thisView.model._banner = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  },

  setContent : function () {
    var titleContent = this.$el.find('#title_content_editor').html();
    this.$el.find('#story_title').attr('value', titleContent);

    var $bodyElement = this.$('#body_content_editor')
    var $fragments = $bodyElement.children();

    var $titleElement = this.$('#title_content_editor');

    var thisView = this;

    // Add unique IDs to each top-level element in the story
    $fragments.each(function (i, fragment) {
      fragment.setAttribute('data-id', thisView.generateFragmentId());
      fragment.className = 'story-content';
    });

    var bodyContent = $bodyElement.html();
    this.$el.find('#story_body').attr('value', bodyContent);

    var titleContent = $titleElement.html();
    this.$('#story_title').attr('value', titleContent);
    
    this.$el.find('.editable').remove();
  },

  generateFragmentId : function () {
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    do {  
      var fragmentId = "";

      for( var i = 0; i < 6; i++ ) {
        fragmentId += possible.charAt(Math.floor(Math.random() * possible.length));
      }
    } while (this.assignedIds.indexOf(fragmentId) !== -1)

    this.assignedIds.push(fragmentId);
    return fragmentId;
  },

})