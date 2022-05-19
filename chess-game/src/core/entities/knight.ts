import Board from "./board";
import Piece from "./piece";
import Position from "./position";

export default class Knight extends Piece {
    canMove(board: Board, initialPosition: Position, finalPosition: Position): boolean {
        throw new Error("Method not implemented.");
    }

    // canMove(board: Board, startPosition: Position, endPosition: Position): boolean {
    //     if(this.validEndPosition(board, endPosition) && this.isValidMove(startPosition, endPosition))
    //         return true;
    //     return false;
    // }

    // validEndPosition(board: Board, endPosition: Position): boolean {
    //     const endRow = endPosition.getRow();
    //     const endColumn = Number(Object.keys(column).find(k=>column[k] === endPosition.getColumn()));
    //     return board.getBoard()[endRow-1][endColumn].getPiece()?.getColor() !== this.getColor() 
    //     || board.getBoard()[endRow-1][endColumn].getPiece() === null;
    // }

    // isValidMove(startPosition: Position, endPosition: Position): boolean {
    //     return (Math.abs(startPosition.getRow() - endPosition.getRow()) === 1 
    //     && Math.abs(startPosition.getColumn().charCodeAt(0) - endPosition.getColumn().charCodeAt(0)) === 2)
    //     ||  (Math.abs(startPosition.getRow() - endPosition.getRow()) === 2 
    //     && Math.abs(startPosition.getColumn().charCodeAt(0) - endPosition.getColumn().charCodeAt(0)) === 1)
    //     ? true : false ;
    // }
}