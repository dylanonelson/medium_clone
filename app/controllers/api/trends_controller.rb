class Api::TrendsController < ApplicationController

  def stories
    @stories = Story.most_commented
    render 'api/stories/index'
  end

  def authors
    @stories = Story.from_popular_authors
    render 'api/stories/index'
  end

end
