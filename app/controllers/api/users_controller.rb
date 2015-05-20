class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def profile
    
  end

  def update
    @user = current_user
    
    if current_user.update(api_user_params)
      render :show
    else
      render json: current_user.errors.full_messages
    end
  end

  private

  def api_user_params
    params.require(:user).permit(:username, :password, :email, :avatar)
  end

end
