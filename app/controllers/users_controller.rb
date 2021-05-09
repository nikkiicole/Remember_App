class UsersController < ApiController
  skip_before_action :authenticate_user!, only: %i[index show]
  def index
    @users = User.all

    render json: @users, include: :memoirs
  end


def show

  # @user = User.find(params[:id])

  render json: current_user, include: :memoirs

end


end