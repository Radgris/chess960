require_relative '../board.rb'

class Piece

    attr_accessor :x, :y, :movelist, :color, :longmovement, :can_move_to

    def initialize(position, faction)
        @x = position[0]
        @y = position[1]
        @color = faction
        @can_move_to = []
    end
    
    def move(target)
        
        if(can_move_to.include?(target))
        
            @x = target[0]
            @y = target[1]
            
            @has_moved = true
        end
    end
    
    def is_possible_move_to()
    
        @can_move_to = []
   
        for i in movelist
        
            a = @x + i[0]
            b = @y + i[1]
            
            loop do
            
                if(Board.includes?(a,b))
                
                    if(tile[a][b].color == !@color)
                    
                        can_move_to.push(tile[a][b], "Eat")
                        break
                        #pice is eaten    
                    
                    elsif (tile[a][b].nil?)
                    
                        can_move_to.push(tile[a][b], "Move")   
                        #piece can move
                    
                    else
                    
                        puts'cant move this piece in this direction'
                        break
                    end
                end
                break if(longmovement == false)
            end
        end
    end
end

class King < Piece
    
    attr_accessor :has_moved
    
    def initialize(position, faction)
        
        @has_moved = false
        @longmovement = false
        @movelist=[
            [0,-1],
            [1,-1],
            [1,0],
            [1,1],
            [0,1],
            [-1,1],
            [-1,0],
            [-1,1]
            ]
            
        super
    end
end

class Queen < Piece
    def initialize(position, faction)
        
        @longmovement = true
        @movelist=[
            [0,-1],
            [1,-1],
            [1,0],
            [1,1],
            [0,1],
            [-1,1],
            [-1,0],
            [-1,1]
            ]
            
        super
    end
end

class Rook < Piece
    
    attr_accessor :has_moved
    
    def initialize(position, faction)
         
         @has_moved = false
         @longmovement = true
         
         @movelist=[
            [0,-1],
            [1,0],
            [0,1],
            [-1,0]
            ]
            
        super
    end
end

class Bishop < Piece
    def initialize(position, faction)
        
        @longmovement = true
        @movelist=[
            [1,-1],
            [1,1],
            [-1,1],
            [-1,1]
            ]
        
        super
    end
end

class Knight < Piece
    def initialize(position, faction)
        
        @longmovement = false
        @movelist=[
            [1,-2],
            [2,-1],
            [2,1],
            [1,2],
            [-1,2],
            [-2,1],
            [-2,1],
            [-1,2]
            ]
        
        super
    end
end

class Pawn < Piece
    
    attr_accessor :has_moved
    
    def initialize(position, faction)
        
        @longmovement = false
        @has_moved = false
        
        if(self.color == 'black')
        
        @movelist=[
            [0,2],
            [0,1],
            [1,1],
            [-1,1]
            ]
        
        else
            
        @movelist=[
            [0,-2],
            [0,-1],
            [1,-1],
            [-1,1]
            ]
            
        end    
        
        super
    end
    
  ##custom method for pawn due to the directon of movement and different eating pattern
  
    def is_possible_move_to()
      
        if(has_moved == false)
        
            a = @x + movelist[0][0]
            b = @y + movelist[0][1]
            
            if (Board.includes?(a,b))
                
                if (tile[a][b].color == !@color)
                   
                elsif (tile[a][b].nil?)
                
                    can_move_to.push(tile[a][b], "Move")
                
                else
                    
                    puts'cant move this piece in this direction'
                    break
                      
                    
                end
            end    
        end
        
        a = @x + movelist[1][0]
        b = @y + movelist[1][1]
        
        if(Board.includes?(a,b))
            
            if(tile[a][b].nil?)
                
                can_move_to.push(tile[a][b], "Move")
            end
        end
        
        
        for i in 2...3
        
            a = @x + movelist[i][0]
            b = @y + movelist[i][1]
            
            loop do
            
                if(Board.includes?(a,b))
                    
                    if(tile[a][b].color == !@color)
                        
                        can_move_to.push(tile[a][b], "Eat")
                        break
                        #pice is eaten    
                        
                    else
                        
                        puts'cant move this piece in this direction'
                        break
                    end
                end
                    break if(longmovement == false)
            end
        end
    end
end




class PieceFactory
    def self.createPiece(key, position, faction)
        case key
        when 'K'
            King.New(position,faction)
        when 'Q'
            Queen.New(position,faction)
        when 'R'
            Rook.New(position,faction)
        when 'B'
            Bishop.New(position,faction)
        when 'N'
            Knight.New(position,faction)
        when 'P'
            Pawn.New(position,faction)
        else
            raise 'Unsupported Piece'
        end
    end
end