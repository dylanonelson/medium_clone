module Api
  class StoriesController < ApplicationController

    def index
      @stories = current_user.stories
    end

    def show
      @story = Story.includes(:author).find(params[:id])
      render :show
    end

    def create
      @story = current_user.stories.new(story_params)

      if @story.save
        render :show
      else
        render json: @story.errors.full_messages
      end
    end

    private

    def story_params
      params.require(:story).permit(:title, :body)
    end

  end
end
