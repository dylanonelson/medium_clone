module Api
  class StoriesController < ApplicationController

    def index
      if params[:user_id]
        @stories = User.find(params[:user_id]).stories.includes(:author)
      else
        @stories = current_user.stories.includes(:author)
      end
    end

    def show
      @story = Story.includes(:author, comments: :commenter).find(params[:id])
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
