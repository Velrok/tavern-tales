class CreatePlayerCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :player_characters do |t|
      t.string :name
      t.string :dnd_beyond_link

      t.timestamps
    end
  end
end
