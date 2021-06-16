class CreateMonsters < ActiveRecord::Migration[6.1]
  def change
    create_table :monsters do |t|
      t.integer :current_hp
      t.integer :max_hp
      t.string :name
      t.text :description
      t.string :image

      t.timestamps
    end
  end
end
