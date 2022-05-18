import Board from "./board";
import Piece from "./piece";
import Position from "./position";
import { column } from "./types";

export default class Bishop extends Piece {
    canMove(board: Board, startPosition: Position, endPosition: Position): boolean {
        if(this.validEndPosition(board, endPosition) && this.isValidMove(startPosition, endPosition) && !this.isBlocked(board, startPosition, endPosition))
            return true;
        return false;
    }

    isBlocked(board: Board, startPosition: Position, endPosition: Position): boolean {
        const startRow = startPosition.getRow();
        const endRow = endPosition.getRow();
        const startColumn = Number(Object.keys(column).find(k=>column[k] === startPosition.getColumn()));
        const endColumn = Number(Object.keys(column).find(k=>column[k] === endPosition.getColumn()));
        const distance = Math.abs(startRow - endRow);

        for (let i = 1; i < distance; i++)
        {
            if(startRow > endRow && startColumn > endColumn) {
                let row = startRow - i;
                let col = startColumn - i;
                if(board.getBoard()[row-1][col].getPiece() !== null)
                    return true;
            } else if(startRow < endRow && startColumn < endColumn) {
                let row = startRow + i;
                let col = startColumn + i;
                if(board.getBoard()[row-1][col].getPiece() !== null)
                    return true;
            } else if(startRow > endRow && startColumn < endColumn) {
                let row = startRow - i;
                let col = startColumn + i;
                if(board.getBoard()[row-1][col].getPiece() !== null)
                    return true;
            } else if(startRow < endRow && startColumn > endColumn) {
                let row = startRow + i;
                let col = startColumn - i;
                if(board.getBoard()[row-1][col].getPiece() !== null)
                    return true;
            }
        }
        return false;
    }

    validEndPosition(board: Board, endPosition: Position): boolean {
        const endRow = endPosition.getRow();
        const endColumn = Number(Object.keys(column).find(k=>column[k] === endPosition.getColumn()));
        return board.getBoard()[endRow-1][endColumn].getPiece()?.getColor() !== this.getColor() 
        || board.getBoard()[endRow-1][endColumn].getPiece() === null;
    }

    isValidMove(startPosition: Position, endPosition: Position): boolean {
        return Math.abs(startPosition.getRow() - endPosition.getRow()) === Math.abs(startPosition.getColumn().charCodeAt(0) - endPosition.getColumn().charCodeAt(0)) 
        ? true : false ;
    }
}