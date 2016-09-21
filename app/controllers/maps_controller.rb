class MapsController < ApplicationController
  def show
    render template: "maps/#{params[:page]}"
  end
end
