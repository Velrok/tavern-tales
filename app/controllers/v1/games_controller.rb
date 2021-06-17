class V1::GamesController < ApplicationController
  def index
    render json: Game.all
  end

  def create
    new_game = Game.create(game_params)
    redirect_to v1_game_path(new_game)
  end

  private
  def game_params
    params.require(:game).permit(:name)
  end
end
