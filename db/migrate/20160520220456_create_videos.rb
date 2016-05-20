class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :title
      t.text :note
      t.string :media
      t.string :tag

      t.timestamps null: false
    end
  end
end
