import Board from "./board";
import Piece from "./piece";
import Position from "./position";
import { asciiToColumn, numberToRow } from "./types";

export default class Rook extends Piece {

    canMove(board: Board, endPosition: Position): boolean {
        return this.validEndPosition(board, endPosition) && this.isValidMove(endPosition) && !this.isBlocked(board, endPosition);
    }

    isBlocked(board: Board, endPosition: Position): boolean {
        const startRow = this.getPosition().getRow();
        const endRow = endPosition.getRow();
        const startColumn = this.getPosition().getColumn().charCodeAt(0);
        const endColumn = endPosition.getColumn().charCodeAt(0);
        let distance;

        if(Math.abs(startRow - endRow) > Math.abs(startColumn - endColumn)) {
            distance = Math.abs(startRow - endRow);
            for (let i = 1; i < distance; i++)
            {
                if(this.invalidVerticalMove(board, startRow, endRow, i)) {
                    return true;
                }
            }
        } else {
            distance = Math.abs(startColumn - endColumn);
            for (let i = 1; i < distance; i++)
            {
                if(this.invalidHorizontalMove(board, startColumn, endColumn, i)) {
                    return true;
                }
            }
        }
        
        return false;
    }

    invalidVerticalMove(board:Board, startRow:number, endRow:number, i:number) {
        if(startRow > endRow) {
            let row = startRow - i;
            return board.getPiece(new Position(numberToRow[row], this.getPosition().getColumn())) !== undefined;
        } else {
            let row = startRow + i;
            return board.getPiece(new Position(numberToRow[row], this.getPosition().getColumn())) !== undefined;
        }
    }

    invalidHorizontalMove(board:Board, startColumn:number, endColumn:number, i:number) {
        if(startColumn > endColumn) {
            const column = startColumn - i;
            return board.getPiece(new Position(this.getPosition().getRow(), asciiToColumn[column])) !== undefined;
        } else {
            const column = startColumn + i;
            return board.getPiece(new Position(this.getPosition().getRow(), asciiToColumn[column])) !== undefined;
        }
    }

    validEndPosition(board: Board, endPosition: Position): boolean {
        return board.getPiece(endPosition)?.getColor() !== this.getColor() 
        || board.getPiece(endPosition) === undefined;
    }

    isValidMove(endPosition: Position): boolean {
        return this.getPosition().getRow() === endPosition.getRow() 
        || this.getPosition().getColumn() === endPosition.getColumn() 
        ? true : false ;
    }
}