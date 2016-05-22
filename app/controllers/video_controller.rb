class VideoController < ApplicationController
  before_action :authenticate_user!

  def index
    @videos = Video.all
  end

  def show
    @video = Video.find(params[:id])

  end
end
