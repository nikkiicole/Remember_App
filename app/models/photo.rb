class Photo < ApplicationRecord
  belongs_to :user
  belongs_to :memoir


  validates :caption, presence: true

  
  has_one_attached :picture
  def url
    puts picture.inspect
    picture.url
  end

end
