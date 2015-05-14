class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :commenter_id, null: false
      t.string :fragment_id, null: false
      t.integer :story_id, null: false

      t.timestamps null: false
    end

    add_index :comments, :commenter_id
    add_index :comments, :story_id
    add_index :comments, :fragment_id
  end
end
