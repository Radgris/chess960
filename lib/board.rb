require_relative '../pieces/pieces.rb'


class Board

    attr_accessor :tile

    def initialize()
        @tile = Array.new(8) { Array.new(8, nil) }
        seed = rand(959)
        build_board(seed)
    end

    def build_board(board_seed)
        #board_code = ['B','R','K','R','N','B','N','Q']
        board_code = consult_seed(board_seed)
        place_special_pieces(board_code)
        place_pawns()
    end

    def place_special_pieces(boardCode)
        x=0
        for i in boardCode do
          @tile[0][x] = PieceFactory.createPiece(i,[0,x], "black")
          @tile[7][x] = PieceFactory.createPiece(i,[7,x], "white")  
          x+=1
        end
    end

    def place_pawns()
        x=0
        #verify while length
        while x < 8
            @tile[1][i] = PieceFactory.createPiece("P",[1,i], "black")
            @tile[6][i] = PieceFactory.createPiece("P",[6,i], "white")       
        end
    end
end