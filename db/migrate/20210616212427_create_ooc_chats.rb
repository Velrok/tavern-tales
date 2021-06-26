# typed: ignore
class CreateOocChats < ActiveRecord::Migration[6.1]
  def change
    create_table :ooc_chats do |t|

      t.timestamps
    end
  end
end
