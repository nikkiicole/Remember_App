class Photo < ApplicationRecord
  belongs_to :user
  belongs_to :memoir

  # validates :img_url, presence: true
  # validates :caption, presence: true

  
  has_one_attached :picture
  def url
    puts picture.inspect
    picture.url
  end

end
