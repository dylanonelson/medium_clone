class Api::FollowsController < ApplicationController

  def create
    follow = current_user.active_follows.new(followed_id: follow_params[:followed_id])
    
    if follow.save
      render json: follow
    else
      render json: follow.errors.full_messages
    end
  end

  def destroy
    follow = current_user.active_follows.find_by(followed_id: follow_params[:followed_id])

    if follow.destroy
      render json: follow
    else
      render json: follow.errors.full_messages
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:followed_id)
  end

end
