class AddPublishedToStories < ActiveRecord::Migration
  def change
    add_column :stories, :published, :boolean, default: false, null: false
    add_column :stories, :published_at, :datetime
    add_index :stories, :published_at
  end
end
