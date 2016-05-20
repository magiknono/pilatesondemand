class Video < ActiveRecord::Base
  validates :title, :media, :tag, presence: true
end
