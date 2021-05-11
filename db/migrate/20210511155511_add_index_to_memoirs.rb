class AddIndexToMemoirs < ActiveRecord::Migration[6.1]
  def change
    add_index :memoirs, [:name, :shareble_id] 
  end
end
