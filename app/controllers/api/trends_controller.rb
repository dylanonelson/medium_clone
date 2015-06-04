class Api::TrendsController < ApplicationController

  def stories
    @stories = Story.most_commented
    render 'api/stories/index'
  end

  def authors
    @stories = Story.from_popular_authors
    render 'api/stories/index'
  end

  def search
    @search_results = PgSearch.multisearch(params[:query])
    
    story_ids = @search_results.where(searchable_type: 'Story').find_each.map do |story|
      story.searchable_id
    end
    @stories = Story.where(id: story_ids)

    user_ids = @search_results.where(searchable_type: 'User').find_each.map do |user|
      user.searchable_id
    end
    @users = User.where(id: user_ids)

    tag_ids = @search_results.where(searchable_type: 'Tag').find_each.map do |tag|
      tag.searchable_id
    end
    @tags = Tag.where(id: tag_ids)
  end

end
