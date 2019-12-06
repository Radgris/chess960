class User < ApplicationRecord
    # before_validation :set_provider
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
          :jwt_authenticatable,
          jwt_revocation_strategy: JwtBlacklist
    
    has_and_belongs_to_many :permissions
    
    
    

    # private
    
    # def set_provider
    #   self.provider = "email"
    # end

end
