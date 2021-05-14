class MemoirsController < ApiController
  before_action :set_memoir, only: [:show, :update, :destroy]
  skip_before_action :authenticate_user!, only: %i[index show]

  # GET /memoirs
  def index
    @memoirs = Memoir.all

    render json: @memoirs, methods: :url
  end

  # GET /memoirs/1
  def show
    render json: @memoir, include: [ :user, photos:{methods: :url },memories:{include: :user}], methods: :url
  end

  # POST /memoirs
# this allows only the current user to be set as the user associated with the created memoir
  def create
    puts params
    @memoir = Memoir.new(memoir_params)
    @memoir.user = current_user
    
    if @memoir.save
      render json: @memoir, status: :created, methods: :url
    else
      render json: @memoir.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /memoirs/1
  def update
    if @memoir.update(memoir_params)
      @memoir.user = current_user
      render json: @memoir, methods: :url
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

  def search
    @results = Memoir.name_search(params[:name])
    render json: @results 
  end
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_memoir
      @memoir = Memoir.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def memoir_params
      params.permit(:name, :thoughts, :shareble_id, :sunrise, :sunset, :profile_picture, :picture)
    end



end
