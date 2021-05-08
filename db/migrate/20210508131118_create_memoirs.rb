class CreateMemoirs < ActiveRecord::Migration[6.1]
  def change
    create_table :memoirs do |t|
      t.string :name
      t.date :sunrise
      t.date :sunset
      t.text :thoughts
      t.string :shareble_id
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
