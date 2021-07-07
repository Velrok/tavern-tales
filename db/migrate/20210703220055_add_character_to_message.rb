class AddCharacterToMessage < ActiveRecord::Migration[6.1]
  def up
    change_table :messages do |t|
      t.string :character
    end
  end

  def down
    remove_columns :messages, :character
  end
end
