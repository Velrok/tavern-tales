# typed: ignore
class AddOauthFieldsForUsers < ActiveRecord::Migration[6.1]
  def up
    change_table :users do |t|
      t.string :uid, uniq: true
      t.string :nickname, uniq: false
    end
  end

  def down
    remove_columns :users, :uid
    remove_columns :users, :nickname
  end
end
