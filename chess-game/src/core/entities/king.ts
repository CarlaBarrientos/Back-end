import Board from "./board";
import Piece from "./piece";
import Position from './position';

export default class King extends Piece {
    canMove(board: Board, initialPosition: Position, finalPosition: Position): boolean {
        throw new Error("Method not implemented.");
    }
    // canMove(board: Board, startPosition: Position, endPosition: Position): boolean {
    //     if(this.validEndPosition(board, endPosition) 
    //     && this.isValidMove(startPosition, endPosition) 
    //     && !this.isBlocked(board, startPosition, endPosition)
    //     && !this.checkMate(board, endPosition))
    //         return true;
    //     return false;
    // }

    // isBlocked(board: Board, startPosition: Position, endPosition: Position): boolean {
    //     const endRow = endPosition.getRow();
    //     const endColumn = Number(Object.keys(column).find(k=>column[k] === endPosition.getColumn()));
    //     this.checkMate(board, endPosition);
    //     return board.getBoard()[endRow - 1][endColumn].getPiece() !== null 
    //     && board.getBoard()[endRow-1][endColumn].getPiece()?.getColor() !== this.getColor();
    // }

    // validEndPosition(board: Board, endPosition: Position): boolean {
    //     const endRow = endPosition.getRow();
    //     const endColumn = Number(Object.keys(column).find(k=>column[k] === endPosition.getColumn()));
    //     return board.getBoard()[endRow-1][endColumn].getPiece()?.getColor() !== this.getColor() 
    //     || board.getBoard()[endRow-1][endColumn].getPiece() === null;
    // }

    // isValidMove(startPosition: Position, endPosition: Position): boolean {
    //     return Math.abs(startPosition.getRow() - endPosition.getRow()) <= 1 
    //     && Math.abs(startPosition.getColumn().charCodeAt(0) - endPosition.getColumn().charCodeAt(0)) <= 1
    //     ? true : false ;
    // }

    // checkMate(board: Board, endPosition: Position) {
    //     let check = false;
    //     const blackPieces: Position[] = board.getBoard().flat().filter((position) => position.getPiece()?.getColor() !== this.getColor());
    //     blackPieces.forEach((position) => {
    //         if(position.getPiece()?.canMove(board, new Position(position.getColumn(), position.getRow(), null), endPosition))
    //             check = true;
    //     });
    //     return check;
    // }
}