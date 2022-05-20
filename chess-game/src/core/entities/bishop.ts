import Board from "./board";
import Piece from "./piece";
import Position from "./position";
import { asciiToColumn, numberToRow } from "./types";

export default class Bishop extends Piece {

    canMove(board: Board, endPosition: Position): boolean {
        return this.validEndPosition(board, endPosition) && this.isValidMove(endPosition) && !this.isBlocked(board, endPosition);
    }

    isBlocked(board: Board, endPosition: Position): boolean {
        const startRow = this.getPosition().getRow();
        const endRow = endPosition.getRow();
        const startColumn = this.getPosition().getColumn().charCodeAt(0);
        const endColumn = endPosition.getColumn().charCodeAt(0);
        const distance = Math.abs(startRow - endRow);

        for (let i = 1; i < distance; i++)
        {
            if(endColumn > startColumn) {
                if(this.invalidRightDiagonalMove(board, startRow, startColumn, endRow, i)) {
                    return true;
                }
            } else {
                if(this.invalidLeftDiagonalMove(board, startRow, startColumn, endRow, i)) {
                    return true;
                }
            }
        }

        return false;
    }

    invalidRightDiagonalMove(board: Board, startRow:number, startColumn:number,  endRow:number, i:number) {
        if(startRow > endRow) {
            const row = startRow - i;
            const col = startColumn + i;
            return board.getPiece(new Position(numberToRow[row], asciiToColumn[col])) !== undefined;
        } else {
            const row = startRow + i;
            const col = startColumn + i;
            return board.getPiece(new Position(numberToRow[row], asciiToColumn[col])) !== undefined;
        }
    }

    invalidLeftDiagonalMove(board: Board, startRow:number, startColumn:number,  endRow:number, i:number) {
        if(startRow > endRow) {
            const row = startRow - i;
            const col = startColumn - i;
            return board.getPiece(new Position(numberToRow[row], asciiToColumn[col])) !== undefined;
        } else {
            const row = startRow + i;
            const col = startColumn - i;
            return board.getPiece(new Position(numberToRow[row], asciiToColumn[col])) !== undefined;
        }
    }

    validEndPosition(board: Board, endPosition: Position): boolean {
        return board.getPiece(endPosition)?.getColor() !== this.getColor() 
        || board.getPiece(endPosition) === undefined;
    }

    isValidMove(endPosition: Position): boolean {
        return Math.abs(this.getPosition().getRow() - endPosition.getRow()) 
        === Math.abs(this.getPosition().getColumn().charCodeAt(0) - endPosition.getColumn().charCodeAt(0)) 
        ? true : false ;
    }
}