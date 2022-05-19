import Board from "./board";
import Piece from "./piece";
import Position from "./position";

export default class Rook extends Piece {
    canMove(board: Board, initialPosition: Position, finalPosition: Position): boolean {
        throw new Error("Method not implemented.");
    }

    // canMove(board: Board, startPosition: Position, endPosition: Position): boolean {
    //     if(this.validEndPosition(board, endPosition) && this.isValidMove(startPosition, endPosition) && !this.isBlocked(board, startPosition, endPosition))
    //         return true;
    //     return false;
    // }

    // isBlocked(board: Board, startPosition: Position, endPosition: Position): boolean {
    //     const startRow = startPosition.getRow();
    //     const endRow = endPosition.getRow();
    //     const startColumn = Number(Object.keys(column).find(k=>column[k] === startPosition.getColumn()));
    //     const endColumn = Number(Object.keys(column).find(k=>column[k] === endPosition.getColumn()));
    //     const distance = Math.abs(startRow - endRow + startColumn - endColumn);

    //     for (let i = 1; i < distance; i++)
    //     {
    //         if(startRow > endRow) {
    //             let row = startRow - i;
    //             if(board.getBoard()[row-1][startColumn].getPiece() !== null)
    //                 return true;
    //         } else if(startRow < endRow) {
    //             let row = startRow + i;
    //             if(board.getBoard()[row-1][startColumn].getPiece() !== null)
    //                 return true;
    //         } else if(startColumn > endColumn) {
    //             let column = startColumn - i;
    //             if(board.getBoard()[startRow-1][column].getPiece() !== null)
    //                 return true;
    //         } else if(startColumn < endColumn) {
    //             let column = startColumn - i;
    //             if(board.getBoard()[startRow-1][column].getPiece() === null)
    //                 return true;
    //         }
    //     }
    //     return false;
    // }

    // validEndPosition(board: Board, endPosition: Position): boolean {
    //     const endRow = endPosition.getRow();
    //     const endColumn = Number(Object.keys(column).find(k=>column[k] === endPosition.getColumn()));
    //     return board.getBoard()[endRow-1][endColumn].getPiece()?.getColor() !== this.getColor() 
    //     || board.getBoard()[endRow-1][endColumn].getPiece() === null;
    // }

    // isValidMove(startPosition: Position, endPosition: Position): boolean {
    //     return startPosition.getRow() === endPosition.getRow() 
    //     || startPosition.getColumn() === endPosition.getColumn() 
    //     ? true : false ;
    // }
}