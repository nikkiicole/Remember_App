class Memory < ApplicationRecord
  belongs_to :user
  belongs_to :memoir

  validates :content, presence: true
end
