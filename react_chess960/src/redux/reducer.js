import setPieces from './boardCreator';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_BOARD':
            return {board:setPieces(['B','R','K','R','N','B','N','Q'], 0), numberPlayer: action.payload.playerNumber, selectedPiece: null};
        case 'PIECE_SELECTED':
            return {...state, board: showPossibleMoves(action.payload, state.board), selectedPiece: action.payload.selectedPiece};
        case 'MOVE_PIECE':
            return {...state, board: movePiece(action.payload, state.board, state.selectedPiece), selectedPiece:null};
        default:
            return {board:setPieces(['B','R','K','R','N','B','N','Q'], 0), playerNumber: 0, selectedPiece:null, eatenPieces: null};
    }
};

const showPossibleMoves = ({posibleCells, attackCells}, board) => {
    let newBoard = {...board};
    posibleCells.forEach(cell => {
        newBoard[cell] = {...newBoard[cell], posMove: true};
    });
    attackCells.forEach(cell=>{
        newBoard[cell] = {...newBoard[cell], eatPiece: true};
    });
    return newBoard;
};

const movePiece = ({toCell}, board, fromCell) => {
    // console.log(board)
    let newBoard = {...board};
    newBoard[toCell] = {...newBoard[toCell], piece: newBoard[fromCell.cellKey].piece} ;
    newBoard[fromCell.cellKey] = {...newBoard[fromCell.cellKey], piece:null};
    return newBoard;
};

export default reducer;