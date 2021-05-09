class PhotosController < ApplicationController
  before_action :set_photo, only: [:show, :update, :destroy]

  # GET /photos
  def index
    @photos = Photo.all

    render json: @photos
  end

  # GET /photos/1
  def show
    render json: @photo
  end

  # POST /photos
  def create
    @photo = Photo.new(photo_params)
    @photo.user = current_user
    @photo.memoir = Memoir.find(photo_params[:memoir_id])

    if @photo.save
      render json: @photo, status: :created
    else
      render json: @photo.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /photos/1
  def update
    if @photo.update(photo_params)
      @photo.user = current_user
      @photo.memoir = Memoir.find(photo_params[:memoir_id])
      render json: @photo
    else
      render json: @photo.errors, status: :unprocessable_entity
    end
  end

  # DELETE /photos/1
  def destroy
   if @photo.destroy
    render json: "Your photo has been deleted"
   end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_photo
      @photo = Photo.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def photo_params
      params.require(:photo).permit(:caption, :img_url, :memoir_id)
    end
end
