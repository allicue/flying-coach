class CreateDestinations < ActiveRecord::Migration[6.0]
  def change
    create_table :destinations do |t|
      t.string :country_name
      t.string :description
      t.string :hero_img
      t.string :about_img

      t.timestamps
    end
  end
end
