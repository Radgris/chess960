class UsersPermissions < ActiveRecord::Migration[6.0]
  def change
    create_join_table :permissions, :users do |t|
      t.index [:permission_id, :user_id]
    end
  end
end
