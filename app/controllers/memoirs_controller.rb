class MemoirsController < ApplicationController
  before_action :set_memoir, only: [:show, :update, :destroy]

  # GET /memoirs
  def index
    @memoirs = Memoir.all

    render json: @memoirs
  end

  # GET /memoirs/1
  def show
    render json: @memoir, include: [:memories, :photos]
  end

  # POST /memoirs
# this allows only the current user to be set as the user associated with the created memoir
  def create
    @memoir = Memoir.new(memoir_params)
    @memoir.user = current_user
    
    if @memoir.save
      render json: @memoir, status: :created
    else
      render json: @memoir.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /memoirs/1
  def update
    if @memoir.update(memoir_params)
      @memoir.user = current_user
      render json: @memoir
    else
      render json: @memoir.errors, status: :unprocessable_entity
    end
  end

  # DELETE /memoirs/1
  def destroy
   if @memoir.user = current_user
    @memoir.destroy
    render json: "Your memoir has been deleted"
   end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_memoir
      @memoir = Memoir.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def memoir_params
      params.require(:memoir).permit(:name, :thoughts, :shareble_id, :sunrise, :sunset)
    end
end
