# typed: ignore
class CreatePlaces < ActiveRecord::Migration[6.1]
  def change
    create_table :places do |t|
      t.text :description
      t.string :name
      t.string :map
      t.text :gm_notes

      t.timestamps
    end
  end
end
