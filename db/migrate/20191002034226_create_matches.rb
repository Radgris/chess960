class CreateMatches < ActiveRecord::Migration[6.0]
  def change
    create_table :matches do |t|
      t.string :result
      t.string :moves

      t.timestamps
    end
  end
end
