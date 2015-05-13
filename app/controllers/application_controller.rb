class ApplicationController < ActionController::Base

  protect_from_forgery with: :exception

  helper_method :current_user, :current_session, :logged_in?, :ensure_logged_in

  def current_user
    current_session ? current_session.user : nil
  end

  def current_session
    return nil unless session[:session_token]
    @current_session ||= Session.find_by(session_token: session[:session_token])
  end

  def log_in!(user)
    new_session = user.sessions.create!
    session[:session_token] = new_session.session_token
  end

  def log_out!(user)
    current_session.destroy!
    session[:session_token] = nil
  end

  def logged_in?
    !!current_session
  end

  def ensure_logged_in
    redirect_to new_session_url unless logged_in?
  end

end
