class Photo < ApplicationRecord
  belongs_to :user
  belongs_to :memoir

  validates :img_url, presence: true
  validates :caption, presence: true
end
