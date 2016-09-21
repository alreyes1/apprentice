class CreateFaqs < ActiveRecord::Migration
  def change
    create_table :faqs do |t|
      t.string :questions
      t.text :answers

      t.timestamps null: false
    end
  end
end
