class AddProfilePictureToMemoirs < ActiveRecord::Migration[6.1]
  def change
    add_column :memoirs, :profile_picture, :string
  end
end
