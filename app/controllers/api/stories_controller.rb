module Api
  class StoriesController < ApplicationController

    def show
      @story = Story.find(params[:id])
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
