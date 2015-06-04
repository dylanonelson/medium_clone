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
    @search_results = PgSearch.multisearch(params[:query]).includes(:searchable)
    @stories = @search_results.where(searchable_type: 'Story').find_each.map do |story|
      story.searchable
    end
    @users = @search_results.where(searchable_type: 'User').find_each.map do |user|
      user.searchable
    end
    @tags = @search_results.where(searchable_type: 'Tag').find_each.map do |tag|
      tag.searchable
    end
  end

end
