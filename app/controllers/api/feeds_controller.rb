class Api::FeedsController < ApplicationController

  def show
    @feed = current_user.feed
  end

end
