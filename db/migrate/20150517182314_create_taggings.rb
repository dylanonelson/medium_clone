class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :story_id
      t.integer :tag_id

      t.timestamps null: false
    end

    add_index :taggings, :story_id
    add_index :taggings, :tag_id
  end
end
