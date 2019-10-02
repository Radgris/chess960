class Uniques < ActiveRecord::Migration[6.0]
  def change
    
    add_index(:users, :username, unique: true)
    
    add_index(:permissions, :name, unique: true)
    
  end
end
