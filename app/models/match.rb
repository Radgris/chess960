class Match < ApplicationRecord
    
    belongs_to :user_1, foreign_key => "match_user_1_foreign", class_name => "User"
    belongs_to :user_2, foreign_key => "match_user_2_foreign", class_name => "User"
    
end
