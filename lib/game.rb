require_relative '../pieces/pieces.rb'
require_relative '../board.rb'

class Game
    
     attr_accessor :tile, :board, :turns, :player1, :player2, :checkmate
    
    
    def start()
       
        @board = Board.New()
        @player1 = Player.New()
        @player2 = Player.New()
        @checkmate = false
        
        
    end
    
    
    def turn
    
    
end