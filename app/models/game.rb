# typed: true
class Game < ApplicationRecord
  validates :name, presence: true
  has_many :messages
end
