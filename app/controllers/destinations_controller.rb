class DestinationsController < ApplicationController
  before_action :set_destination, only: [:show]

  # GET /destinations
  def index
    @destinations = Destination.all

    render json: @destinations

  end

  # GET /destinations/1
  def show
    render json: @destination, include: :activities, status: :ok
  end

  # POST /destinations
  # def create
  #   @destination = Destination.new(destination_params)

  #   if @destination.save
  #     render json: @destination, status: :created, location: @destination
  #   else
  #     render json: @destination.errors, status: :unprocessable_entity
  #   end
  # end

  # PATCH/PUT /destinations/1
  # def update
  #   if @destination.update(destination_params)
  #     render json: @destination
  #   else
  #     render json: @destination.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /destinations/1
  # def destroy
  #   @destination.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_destination
      @destination = Destination.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def destination_params
      params.require(:destination).permit(:country_name, :description, :hero_img, :about_img)
    end
end
