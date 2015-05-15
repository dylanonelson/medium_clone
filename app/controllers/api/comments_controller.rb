class Api::CommentsController < ApplicationController

  def index
    @story = Story.find(params[:story_id])
    @comments = @story.comments
    render :index
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.commenter_id = current_user.id

    if @comment.save
      render :show, status: 200
    else
      render json: 'Something went wrong'
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:fragment_id, :story_id, :body)
  end

end
