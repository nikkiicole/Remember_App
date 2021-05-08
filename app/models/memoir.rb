class Memoir < ApplicationRecord
  belongs_to :user
  has_many :memories
  has_many :photos

  validates :name, presence: true
  validates :sunrise, presence: true
  validates :sunset, presence: true
  validates :thoughts, presence: true
  validates :shareble_id, length: { is: 6 }, uniqueness: true, presence: true
end
