class MakeFollowsPolymorphic < ActiveRecord::Migration
  def change
    remove_column :follows, :followed_id, :integer
    add_column :follows, :followable_id, :integer, null: false
    add_column :follows, :followable_type, :string , null: false
  end
end
