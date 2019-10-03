class ChangeMatchColumnTypeToJson < ActiveRecord::Migration[6.0]
  def change
    change_column :matches, :moves, :json
  end
end
 