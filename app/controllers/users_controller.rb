class UsersController < ApplicationController
# before_action :authenticate_user!
  def index
    @users = User.all

    render json: @users, include: :memoirs
  end


def show

  # @user = User.find(params[:id])

  render json: current_user, include: :memoirs

end


end