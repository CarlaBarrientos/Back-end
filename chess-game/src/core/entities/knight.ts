import Board from "./board";
import Piece from "./piece";
import Position from "./position";

export default class Knight extends Piece {

    canMove(board: Board, endPosition: Position): boolean {
        return this.validEndPosition(board, endPosition) && this.isValidMove(endPosition);
    }

    validEndPosition(board: Board, endPosition: Position): boolean {
        return board.getPiece(endPosition)?.getColor() !== this.getColor() 
        || board.getPiece(endPosition) === null;
    }

    isValidMove(endPosition: Position): boolean {
        return (Math.abs(this.getPosition().getRow() - endPosition.getRow()) === 1 
        && Math.abs(this.getPosition().getColumn().charCodeAt(0) - endPosition.getColumn().charCodeAt(0)) === 2)
        ||  (Math.abs(this.getPosition().getRow() - endPosition.getRow()) === 2 
        && Math.abs(this.getPosition().getColumn().charCodeAt(0) - endPosition.getColumn().charCodeAt(0)) === 1)
        ? true : false ;
    }
}