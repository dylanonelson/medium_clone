class Api::SessionsController < ApplicationController

  def create
    debugger
    @user = User.find_by_credentials(
      api_session_params[:username],
      api_session_params[:password]
    )

    if @user
      log_in!(@user)
      render 'api/users/profile'
    else
      head :unprocessable_entity
    end
  end

  def destroy
    current_session.destroy!
    render json: {}
  end

  private 

  def api_session_params
    params.require(:user).permit(:username, :password)
  end

end