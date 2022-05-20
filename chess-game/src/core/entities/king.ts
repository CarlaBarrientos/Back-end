import Board from "./board";
import Piece from "./piece";
import Position from './position';

export default class King extends Piece {
    
    canMove(board: Board, endPosition: Position): boolean {
        return this.validEndPosition(board, endPosition) 
        && this.isValidMove(endPosition) 
        && !this.isBlocked(board, endPosition)
        && !this.checkMate(board, endPosition);
    }

    isBlocked(board: Board, endPosition: Position): boolean {
        this.checkMate(board, endPosition);
        return board.getPiece(endPosition) !== null 
        && board.getPiece(endPosition)?.getColor() !== this.getColor();
    }

    validEndPosition(board: Board, endPosition: Position): boolean {
        return board.getPiece(endPosition)?.getColor() !== this.getColor() 
        || board.getPiece(endPosition) === null;
    }

    isValidMove(endPosition: Position): boolean {
        return Math.abs(this.getPosition().getRow() - endPosition.getRow()) <= 1 
        && Math.abs(this.getPosition().getColumn().charCodeAt(0) - endPosition.getColumn().charCodeAt(0)) <= 1
        ? true : false ;
    }

    checkMate(board: Board, endPosition: Position) {
        let check = false;
        const blackPieces: Piece[] = board.getBlackPieces();
        blackPieces.forEach((piece) => {
            if(piece.canMove(board, endPosition))
                check = true;
        });
        return check;
    }
}