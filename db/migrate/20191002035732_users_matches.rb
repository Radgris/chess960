class UsersMatches < ActiveRecord::Migration[6.0]
  def change
    change_table :matches do |t|
           t.references :user_1
           t.references :user_2
        end
    
  end
end
