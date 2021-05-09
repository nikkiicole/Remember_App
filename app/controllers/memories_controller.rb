class MemoriesController < ApplicationController
  before_action :set_memory, only: [:show, :update, :destroy]

  # GET /memories
  def index
    @memories = Memory.all

    render json: @memories
  end

  # GET /memories/1
  def show
    render json: @memory
  end

  # POST /memories
  def create
    @memory = Memory.new(memory_params)
    @memory.user = current_user
    @memory.memoir = Memoir.find(memory_params[:memoir_id])
    # @memory.memoir = current_user.memoir_id
    # @memory.memoir = current_user.memoirs.(params)


    if @memory.save
      render json: @memory, status: :created
    else
      render json: @memory.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /memories/1
  def update
    if @memory.update(memory_params)
      @memory.user = current_user
      @memory.memoir = Memoir.find(memory_params[:memoir_id])
      render json: @memory
    else
      render json: @memory.errors, status: :unprocessable_entity
    end
  end

  # DELETE /memories/1
  def destroy
    if @memory.user = current_user 
      @memory.destroy
      render json: "Your memory has been deleted"
    else
      render json: "You can't delete this memory"
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_memory
      @memory = Memory.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def memory_params
      params.require(:memory).permit(:content, :memoir_id, :user_id)
    end
end
