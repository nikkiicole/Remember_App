class MemoriesController < ApiController
  before_action :set_memory, only: [:show, :update, :destroy]
  skip_before_action :authenticate_user!, only: %i[index show]

  # GET /memories
  def index
    @memories = Memory.all

    render json: @memories, include: [:user]
  end

  # GET /memories/1
  def show
    render json: @memory, include: [:user]
  end

  # POST /memories
  def create
    @memory = Memory.new(memory_params)
    @memory.user = current_user
    @memory.memoir = Memoir.find(params[:memoir_id])


    if @memory.save
      render json: @memory, status: :created, include: [:user]
    else
      render json: @memory.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /memories/1
  def update
    if @memory.update(memory_params)
      @memory.user = current_user
      @memory.memoir = Memoir.find(params[:memoir_id])
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

    def set_memory
      @memory = Memory.find(params[:id])
    end


    def memory_params
      params.require(:memory).permit(:content, :memoir_id, :user_id)
    end
end
