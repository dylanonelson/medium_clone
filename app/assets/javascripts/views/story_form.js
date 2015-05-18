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
    "click #submit-story" : "submitStory",
  },

  submitStory : function (event) {
    event.preventDefault();

    this.setContent();

    var attr = this.$el.serializeJSON();

    var thisModel = this.model;
    thisModel.save(attr, {
      success : function () {
        MediumClone.stories.add(thisModel);
      },
    });
    Backbone.history.navigate('', { trigger : true });
  },

  setContent : function () {
    var titleContent = this.$el.find('#title_content_editor').html();
    this.$el.find('#story_title').attr('value', titleContent);

    var $bodyElement = this.$el.find('#body_content_editor')
    var $fragments = $bodyElement.children();
    var thisView = this;

    // Add unique IDs to each top-level element in the story
    $fragments.each(function (i, fragment) {
      fragment.setAttribute('data-id', thisView.generateFragmentId());
      fragment.className = 'story-content';
    });

    var bodyContent = $bodyElement.html();
    this.$el.find('#story_body').attr('value', bodyContent);
    
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