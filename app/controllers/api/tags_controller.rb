class Api::TagsController < ApplicationController

  def index
    if params[:story_id]
      @tags = Story.find(params[:story_id]).tags
    else
      @tags = Tag.all
    end
  end

  def create
    @tag = Tag.new(tag_params)
    
    if @tag.save
      render json: @tag
    else
      render json: @tag.errors.full_messages
    end
  end

  private

  def tag_params
    params.require(:tag).permit(:label)
  end

end
