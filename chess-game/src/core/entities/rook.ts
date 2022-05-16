import Board from "./board";
import Piece from "./piece";
import Position from "./position";
import { column } from "./types";

export default class Rook extends Piece {

    canMove(board: Board, startPosition: Position, endPosition: Position): boolean {
        if(this.validEndPosition(endPosition) && this.isValidMove(startPosition, endPosition) && !this.isBlocked(board, startPosition, endPosition))
            return true;
        return false;
    }

    isBlocked(board: Board, startPosition: Position, endPosition: Position): boolean {
        const startRow = startPosition.getRow();
        const endRow = endPosition.getRow();
        const startColumn = Number(Object.keys(column).find(k=>column[k] === startPosition.getColumn()));
        const endColumn = Number(Object.keys(column).find(k=>column[k] === endPosition.getColumn()));
        const distance = Math.abs(startRow - endRow + startColumn - endColumn);

        for (let i = 1; i < distance; i++)
        {
            if(startRow > endRow) {
                let row = startRow - i;
                if(board.getBoard()[row-1][startColumn].getPiece() !== null)
                    return true;
            } else if(startRow < endRow) {
                let row = startRow + i;
                if(board.getBoard()[row-1][startColumn].getPiece() !== null)
                    return true;
            } else if(startColumn > endColumn) {
                let column = startColumn - i;
                if(board.getBoard()[startRow-1][column].getPiece() !== null)
                    return true;
            } else if(startColumn < endColumn) {
                let column = startColumn - i;
                if(board.getBoard()[startRow-1][column].getPiece() === null)
                    return true;
            }
        }
        return false;
    }

    validEndPosition(endPosition: Position): boolean {
        if(endPosition.getPiece()?.getColor() !== this.getColor() || endPosition.getPiece() === null)//falta lógica para comer
            return true;
        return false;
    }

    isValidMove(startPosition: Position, endPosition: Position): boolean {
        return startPosition.getRow() === endPosition.getRow() 
        || startPosition.getColumn() === endPosition.getColumn() 
        ? true : false ;
    }
}