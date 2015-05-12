class SessionsController < ApplicationController

  def new
    @user = User.new
    @action = "create"
  end

  def create
    @user = User.find_by_credentials(
      session_params[:username],
      session_params[:password]
    )

    if @user
      log_in!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid username and password combination"]
      @user = User.new(username: session_params[:username])
      @action = "create"
      render :new
    end
  end

  def destroy
    current_session.destroy!
    redirect_to root_url
  end

  private

  def session_params
    params.require(:user).permit(:username, :password)
  end

end
