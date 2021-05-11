class Memoir < ApplicationRecord
  belongs_to :user
  has_many :memories
  has_many :photos

  validates :name, presence: true
  validates :sunrise, presence: true
  validates :sunset, presence: true
  validates :thoughts, presence: true
  validates :shareble_id, length: { is: 6 }, uniqueness: true, presence: true

  # def self.text_search(query)
  #   self.where("similarity(name, ?) > 0.2", query).order("similarity(name, #{ActiveRecord::Base.connection.quote(query)}) DESC")
  # end
  # skinny arrow makes a lambda 
  # Arel helps to write SQL code 
  scope :name_search, ->(name) {
    quoted_name = ApplicationRecord.connection.quote_string(name)
    where("similarity(name, ?) > 0.2", name).
      order(Arel.sql("similarity(name, '#{quoted_name}') DESC"))
  }

end
