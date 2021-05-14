class UsersController < ApiController

  def index
    @users = User.all
    render json: @users, include: [:memoirs, :photos, :memories]
  end


def show
  render json: current_user, include: [:memoirs, :photos, :memories] 
end

def showone
  @user = User.find(params[:id])
  render json: @user, include: [:memoirs, :photos, :memories]
end

end