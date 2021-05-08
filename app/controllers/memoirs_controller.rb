class MemoirsController < ApplicationController
  before_action :set_memoir, only: [:show, :update, :destroy]

  # GET /memoirs
  def index
    @memoirs = Memoir.all

    render json: @memoirs
  end

  # GET /memoirs/1
  def show
    render json: @memoir
  end

  # POST /memoirs
  def create
    @memoir = Memoir.new(memoir_params)

    if @memoir.save
      render json: @memoir, status: :created, location: @memoir
    else
      render json: @memoir.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /memoirs/1
  def update
    if @memoir.update(memoir_params)
      render json: @memoir
    else
      render json: @memoir.errors, status: :unprocessable_entity
    end
  end

  # DELETE /memoirs/1
  def destroy
    @memoir.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_memoir
      @memoir = Memoir.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def memoir_params
      params.fetch(:memoir, {})
    end
end
