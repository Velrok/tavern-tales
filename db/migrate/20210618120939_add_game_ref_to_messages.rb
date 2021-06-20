class AddGameRefToMessages < ActiveRecord::Migration[6.1]
  def up
    change_table :messages do |t|
      t.references :game
    end
    #add a foreign key
    #not supported in sqlite
    # execute <<-SQL
    # ALTER TABLE messages
    # ADD CONSTRAINT fk_messages_games
    # FOREIGN KEY (game_id)
    # REFERENCES games(id)
    # SQL
  end

  def down
    # execute <<-SQL
    # ALTER TABLE messages
    # DROP FOREIGN KEY fk_messages_games
    # SQL

    remove_columns :messages,  :game_id
  end
end
