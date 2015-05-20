class AddLastEditedAtToStories < ActiveRecord::Migration
  def change
    add_column :stories, :last_edited_at, :datetime, null: false
    add_index :stories, :last_edited_at
  end
end
