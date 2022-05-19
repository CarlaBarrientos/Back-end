import Board from "./board";
import Piece from "./piece";
import Position from "./position";

export default class Pawn extends Piece {
    canMove(board: Board, initialPosition: Position, finalPosition: Position): boolean {
        throw new Error("Method not implemented.");
    }

    // canMove(board: Board, startPosition: Position, endPosition: Position): boolean {
    //     if(this.validEndPosition(board, endPosition) && this.isValidMove(board, startPosition, endPosition) && !this.isBlocked(board, startPosition, endPosition))
    //         return true;
    //     return false;
    // }

    // isBlocked(board: Board, startPosition: Position, endPosition: Position): boolean {
    //     const endRow = endPosition.getRow();
    //     const startColumn = Number(Object.keys(column).find(k=>column[k] === startPosition.getColumn()));
    //     return board.getBoard()[endRow - 1][startColumn].getPiece() !== null;
    // }

    // validEndPosition(board: Board, endPosition: Position): boolean {
    //     const endRow = endPosition.getRow();
    //     const endColumn = Number(Object.keys(column).find(k=>column[k] === endPosition.getColumn()));
    //     return board.getBoard()[endRow-1][endColumn].getPiece() === null;
    // }

    // isValidMove(board: Board, startPosition: Position, endPosition: Position): boolean {
    //     const startRow = startPosition.getRow();
    //     const endRow = endPosition.getRow();
    //     const startColumn = Number(Object.keys(column).find(k=>column[k] === startPosition.getColumn()));
    //     const endColumn = Number(Object.keys(column).find(k=>column[k] === endPosition.getColumn()));
    //     if(this.isFirstMove(startPosition) && !this.isBlocked(board, startPosition, endPosition)){
    //         return (startColumn === endColumn) && (Math.abs(startRow - endRow) === 2 
    //         || (Math.abs(startRow - endRow) === 1)) 
    //         || this.isEating(board, startPosition);
    //     } else 
    //         return (startColumn === endColumn) && (Math.abs(startRow - endRow) === 1) 
    //         || Math.abs(startRow - endRow) === 2 && Math.abs(startColumn - endColumn) === 2;
    // }

    // isFirstMove(startPosition: Position): boolean {
    //     const startRow = startPosition.getRow();
    //     return (startRow === 2 || startRow === 7) ? true : false;
    // }

    // isEating(board: Board, endPosition: Position): boolean {
    //     const endRow = endPosition.getRow();
    //     const endColumn = Number(Object.keys(column).find(k=>column[k] === endPosition.getColumn()));
    //     return board.getBoard()[endRow-2][endColumn-1].getPiece()?.getColor() !== this.getColor()
    //     || board.getBoard()[endRow-2][endColumn+1].getPiece()?.getColor() !== this.getColor();
    // }
}