class AddAuthorToMessage < ActiveRecord::Migration[6.1]
  def up
    change_table :messages do |t|
      t.references :game
    end
  end

  def down
    remove_columns :messages, :game_id
  end
end
