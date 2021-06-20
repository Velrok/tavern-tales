class Message < ApplicationRecord
  validates :content, presence: true
  belongs_to :game
end
