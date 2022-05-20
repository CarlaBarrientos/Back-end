import Board from "./board";
import Piece from "./piece";
import Position from "./position";
import { asciiToColumn, numberToRow } from "./types";

export default class Pawn extends Piece {

    canMove(board: Board, endPosition: Position): boolean {
        return this.validEndPosition(board, endPosition) 
        && this.isValidMove(board, endPosition);
    }

    isBlocked(board: Board, endPosition: Position): boolean {
        const startRow = this.getPosition().getRow();
        const endRow = endPosition.getRow();

        if(startRow > endRow) {
            let row = startRow - 1;
            if(board.getPiece(new Position(numberToRow[row], this.getPosition().getColumn())) !== null)
                return true;
        } else if(startRow < endRow) {
            let row = startRow + 1;
            if(board.getPiece(new Position(numberToRow[row], this.getPosition().getColumn())) !== null)
                return true;
        }

        return false;        
    }

    validEndPosition(board: Board, endPosition: Position): boolean {
        return board.getPiece(endPosition) === null;
    }

    isValidMove(board: Board, endPosition: Position): boolean {
        const startRow = this.getPosition().getRow();
        const endRow = endPosition.getRow();
        const startColumn = this.getPosition().getColumn().charCodeAt(0);
        const endColumn = endPosition.getColumn().charCodeAt(0);
        if(this.isFirstMove() && !this.isBlocked(board, endPosition)){
            return (startColumn === endColumn) && (Math.abs(startRow - endRow) === 2 
            || (Math.abs(startRow - endRow) === 1));
        } else if(this.isEating(board, endPosition)) {
            return Math.abs(startRow - endRow) === 2 && Math.abs(startColumn - endColumn) === 2;
        } else {
            return (startColumn === endColumn) && (Math.abs(startRow - endRow) === 1) 
        }
    }

    isFirstMove(): boolean {
        return (this.getPosition().getRow() === 2 || this.getPosition().getRow() === 7) ? true : false;
    }

    isEating(board: Board, endPosition: Position): boolean {
        return board.getPiece(endPosition)?.getColor() !== this.getColor()
        || board.getPiece(endPosition)?.getColor() !== this.getColor();
    }
}