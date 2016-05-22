class PagesController < ApplicationController
  def home
    if user_signed_in?
      redirect_to video_index_path
    end
  end
end
