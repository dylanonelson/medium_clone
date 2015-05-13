class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.string :title
      t.text :body
      t.integer :author_id

      t.timestamps null: false
    end

    add_index :stories, :title
  end
end
