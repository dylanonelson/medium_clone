MediumClone.Views.StoryForm = Backbone.CompositeView.extend({

  tagName : 'form',

  className : 'new_story',

  template : JST['stories/story_form'],

  render : function () {
    var rendered = this.template({
      story : new MediumClone.Models.Story(),
    })

    this.$el.html(rendered);

    var thisView = this;

    this.subviews('#tag-form-view').each(function(subview) {
      thisView.removeSubview('#tag-form-view', subview);
    });

    var tagFormView = new MediumClone.Views.TagForm({
      collection : MediumClone.tags,
    });

    this.addSubview('#tag-form-view', tagFormView);

    var storyStatusView = new MediumClone.Views.StoryStatus({
      model : this.model,
    });
    this.addSubview('#story-status', storyStatusView);

    return this;
  },

  initialize : function () {
    this.assignedIds = [];
    this.listenTo(this.model, 'sync', this.refreshStory.bind(this))
  },

  events : {
    "click #publish-story" : "publishStory",
    "click #save-as-draft" : "saveStoryAsDraft",
    "click #destroy-story" : "destroyStory",
    "click #upload-banner" : "uploadBanner",
    "change #upload-banner-input" : 'bannerUploadChange',
  },

  publishStory : function (event) {
    event.preventDefault();
    this.model.set('published', true);
    this.saveStory(MediumClone.router.feed.bind(MediumClone.router));
  },

  saveStoryAsDraft : function (event) {
    event.preventDefault();
    this.model.set('published', false);
    this.saveStory(this.refreshStory.bind(this));
  },

  saveStory : function (completionCallback) {
    this.setContent();

    var thisModel = this.model;
    thisModel.set(this.$el.serializeJSON().story);

    $body = $('body')
    $body.addClass('loading');

    thisModel.save({}, {
      success : function (storyData) {
        $body.removeClass('loading');
        MediumClone.stories.add(thisModel);
        Backbone.history.navigate('#stories/' + storyData.id + '/edit');
        completionCallback && completionCallback(storyData);
      },
    });
  },

  destroyStory : function () {
    this.model.destroy({
      success : MediumClone.router.profile.bind(MediumClone.router),
    });
  },

  refreshStory : function (storyData) {
    this.render();
    this.$('#body_content_editor').html(storyData.get('body')).append($('<p>&#160;</p>'));
    this.$('#title_content_editor').html(storyData.get('title'));
    this.subviews('#tag-form-view').first().refreshTags(storyData);
  },

  uploadBanner : function (event) {
    event.preventDefault();
    $('#upload-banner-input').trigger('click');
  },

  bannerUploadChange : function (event) {
    var reader = new FileReader();
    var file = event.currentTarget.files[0];
    $body = $('body');

    var thisView = this;

    $body.addClass('loading');

    reader.onloadend = function () {
      $body.removeClass('loading');
      thisView.model._banner = reader.result;
      thisView.saveStory();
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
    // Retain existing IDs that are duplicated by following elements
    thisView.assignedIds = [];
    $fragments.each(function (i, fragment) {
      var $fragment = $(fragment);
      var fragmentId = $fragment.data('id');
      if (fragmentId) {
        if (_.contains(thisView.assignedIds, fragmentId)) {
          $fragment.attr('data-id', thisView.generateFragmentId());
        } else {
          thisView.assignedIds.push(fragmentId);
        }
      } else {
        $fragment.attr('data-id', thisView.generateFragmentId());
      }
    });

    var bodyContent = $bodyElement.html();
    this.$el.find('#story_body').attr('value', bodyContent);

    var titleContent = $titleElement.html();
    this.$('#story_title').attr('value', titleContent);
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