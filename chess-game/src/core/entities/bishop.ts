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
            if(startRow > endRow && startColumn > endColumn) {
                let row = startRow - i;
                let col = startColumn - i;
                if(board.getPiece(new Position(numberToRow[row], asciiToColumn[col])) !== null)
                    return true;
            } else if(startRow < endRow && startColumn < endColumn) {
                let row = startRow + i;
                let col = startColumn + i;
                if(board.getPiece(new Position(numberToRow[row], asciiToColumn[col])) !== null)
                    return true;
            } else if(startRow > endRow && startColumn < endColumn) {
                let row = startRow - i;
                let col = startColumn + i;
                if(board.getPiece(new Position(numberToRow[row], asciiToColumn[col])) !== null)
                    return true;
            } else if(startRow < endRow && startColumn > endColumn) {
                let row = startRow + i;
                let col = startColumn - i;
                if(board.getPiece(new Position(numberToRow[row], asciiToColumn[col])) !== null)
                    return true;
            }
        }
        return false;
    }

    validEndPosition(board: Board, endPosition: Position): boolean {
        return board.getPiece(endPosition)?.getColor() !== this.getColor() 
        || board.getPiece(endPosition) === null;
    }

    isValidMove(endPosition: Position): boolean {
        return Math.abs(this.getPosition().getRow() - endPosition.getRow()) 
        === Math.abs(this.getPosition().getColumn().charCodeAt(0) - endPosition.getColumn().charCodeAt(0)) 
        ? true : false ;
    }
}