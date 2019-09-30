class UserTable < ActiveRecord::Migration[6.0]
  def change
    
  create_table :users do |t|
    t.string :username
    t.string :secret
    t.string :name
    t.string :last_name
    t.date :birthday
    t.string :country

    t.timestamps
  end
    
    
  end
end
