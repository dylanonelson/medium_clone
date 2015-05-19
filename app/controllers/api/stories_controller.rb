module Api
  class StoriesController < ApplicationController

    def index
      if params[:user_id]
        @stories = User.find(params[:user_id]).stories.includes(:author, :tags)
      elsif params[:tag_id]
        @stories = Tag.find(params[:tag_id]).stories.includes(:author, :tags)
      else
        @stories = current_user.stories.includes(:author, :tags)
      end
    end

    def show
      @story = Story.includes(:author, :tags, comments: :commenter).find(params[:id])
      render :show
    end

    def create
      @story = current_user.stories.new(story_params)
      @story.tag_ids = params[:story][:tag_ids]

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
