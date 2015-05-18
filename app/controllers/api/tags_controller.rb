class Api::TagsController < ApplicationController

  def index
    if params[:story_id]
      @tags = Story.find(params[:story_id]).tags
    else
      @tags = Tag.all
    end
  end

end
