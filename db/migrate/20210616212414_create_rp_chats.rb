# typed: ignore
class CreateRpChats < ActiveRecord::Migration[6.1]
  def change
    create_table :rp_chats do |t|

      t.timestamps
    end
  end
end
