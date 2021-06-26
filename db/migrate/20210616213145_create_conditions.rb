# typed: ignore
class CreateConditions < ActiveRecord::Migration[6.1]
  def change
    create_table :conditions do |t|
      t.string :name

      t.timestamps
    end
  end
end
