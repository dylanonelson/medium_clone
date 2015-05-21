class Api::FollowsController < ApplicationController

  def create
    follow = current_user.active_follows.new(follow_params)

    if follow.save
      render json: follow
    else
      render json: follow.errors
    end
  end

  def destroy
    follow = current_user.active_follows.find_by(follow_params)

    if follow.destroy
      render json: follow
    else
      render json: follow.errors
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:followable_id, :followable_type)
  end

end
