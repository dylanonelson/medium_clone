class Api::UsersController < ApplicationController

  def create
    @user = User.new(api_user_params)

    if @user.save
      log_in! @user
      render :profile
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :profile
  end

  def profile
    @user = current_user
    if @user
      render :profile
    else
      render json: {}
    end
  end

  def update
    @user = current_user
    
    if current_user.update(api_user_params)
      render :show
    else
      render json: { errors: current_user.errors.full_messages }, status: 422
    end
  end

  private

  def api_user_params
    params.require(:user).permit(:username, :password, :email, :avatar)
  end

end
