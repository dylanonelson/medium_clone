class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      api_session_params[:username],
      api_session_params[:password]
    )

    if @user
      log_in!(@user)
      render 'api/users/profile'
    else
      render json: { errors: ['A user could not be found that matches those credentials.'] }, status: 422
    end
  end

  def destroy
    current_session.destroy!
    render json: {}
  end

  def omniauth
    @user = User.find_or_create_by_auth_hash(auth_hash)

    if @user
      log_in!(@user)
      redirect_to root_url
    else
      head :unprocessable_entity
    end
  end

  private 

  def api_session_params
    params.require(:user).permit(:username, :password)
  end

  def auth_hash
    request.env['omniauth.auth']
  end

end