# typed: false
class V1::MessagesController < ApplicationController
  def index
    render json: Message.where(game_id: params[:game_id]).order(created_at: :desc).limit(25)
  end

  def create
    Message.create({game_id: params[:game_id]}.merge(message_params))
  end

  private

  def message_params
    params.require(:message).permit(:content, :character)
  end
end
