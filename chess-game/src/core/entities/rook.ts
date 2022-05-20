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
                return this.invalidVerticalMove(board, endRow, i);
            }
        } else {
            distance = Math.abs(startColumn - endColumn);
            for (let i = 1; i < distance; i++)
            {
                return this.invalidHorizontalMove(board, endColumn, i);
            }
        }

        
        return false;
    }

    invalidVerticalMove(board: Board, endRow: number, i: number) {
        if(this.getPosition().getRow() > endRow) {
            let row = this.getPosition().getRow() - i;
            return board.getPiece(new Position(numberToRow[row], this.getPosition().getColumn())) !== null;
        } else {
            let row = this.getPosition().getRow() + i;
            return board.getPiece(new Position(numberToRow[row], this.getPosition().getColumn())) !== null;
        }
    }

    invalidHorizontalMove(board: Board, endColumn: number, i: number) {
        if(this.getPosition().getColumn().charCodeAt(0) > endColumn) {
            const column = this.getPosition().getColumn().charCodeAt(0) - i;
            return board.getPiece(new Position(this.getPosition().getRow(), asciiToColumn[column])) !== null
        } else {
            const column = this.getPosition().getColumn().charCodeAt(0) + i;
            return board.getPiece(new Position(this.getPosition().getRow(), asciiToColumn[column])) !== null;
        }
    }

    validEndPosition(board: Board, endPosition: Position): boolean {
        return board.getPiece(endPosition)?.getColor() !== this.getColor() 
        || board.getPiece(endPosition) === null;
    }

    isValidMove(endPosition: Position): boolean {
        return this.getPosition().getRow() === endPosition.getRow() 
        || this.getPosition().getColumn() === endPosition.getColumn() 
        ? true : false ;
    }
}