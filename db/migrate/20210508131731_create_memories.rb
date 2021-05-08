class CreateMemories < ActiveRecord::Migration[6.1]
  def change
    create_table :memories do |t|
      t.text :content
      t.references :user, null: false, foreign_key: true
      t.references :memoir, null: false, foreign_key: true

      t.timestamps
    end
  end
end
