import Board from "./board";
import Piece from "./piece";
import Position from "./position";
import { asciiToColumn, numberToRow } from './types';

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
            if(board.getPiece(new Position(numberToRow[row], this.getPosition().getColumn())) !== undefined) {
                return true;
            }
        } else if(startRow < endRow) {
            let row = startRow + 1;
            if(board.getPiece(new Position(numberToRow[row], this.getPosition().getColumn())) !== undefined) {
                return true;
            }
        }

        return false;
    }

    validEndPosition(board: Board, endPosition: Position): boolean {
        return board.getPiece(endPosition) === undefined;
    }

    isValidMove(board: Board, endPosition: Position): boolean {
        const startRow = this.getPosition().getRow();
        const endRow = endPosition.getRow();
        const startColumn = this.getPosition().getColumn().charCodeAt(0);
        const endColumn = endPosition.getColumn().charCodeAt(0);
        
        if(this.isEating(board, endPosition)) {
            return Math.abs(startRow - endRow) === 2 && Math.abs(startColumn - endColumn) === 2;
        } else if(this.isFirstMove() && !this.isBlocked(board, endPosition)){
            return (startColumn === endColumn) && (Math.abs(startRow - endRow) === 2
                    || (Math.abs(startRow - endRow) === 1));
        } else if(!this.isBlocked(board, endPosition)) {
            return (startColumn === endColumn) && (Math.abs(startRow - endRow) === 1)
        } else {
            return false;
        }
    }

    isFirstMove(): boolean {
        return (this.getPosition().getRow() === 2 || this.getPosition().getRow() === 7) ? true : false;
    }

    isEating(board: Board, endPosition: Position): boolean {
        if(this.getPosition().getColumn() !== endPosition.getColumn()) {
            if(this.getColor() === 'white') {
                return this.existsBlackPiece(board);
            } else {
                return this.existsWhitePiece(board);
            }
        } else {
            return false;
        }
    }

    existsBlackPiece(board: Board): boolean {
        const startRow = this.getPosition().getRow();
        const startColumn = this.getPosition().getColumn().charCodeAt(0);
        return board.getPiece(new Position(numberToRow[startRow + 1], asciiToColumn[startColumn + 1])) !== undefined
        || board.getPiece(new Position(numberToRow[startRow + 1], asciiToColumn[startColumn - 1])) !== undefined
    }

    existsWhitePiece(board: Board): boolean {
        const startRow = this.getPosition().getRow();
        const startColumn = this.getPosition().getColumn().charCodeAt(0);
        return board.getPiece(new Position(numberToRow[startRow - 1], asciiToColumn[startColumn + 1])) !== undefined
        || board.getPiece(new Position(numberToRow[startRow - 1], asciiToColumn[startColumn - 1])) !== undefined
    }

    canEat(board: Board, endPosition: Position): Piece | undefined {
        const endRow = endPosition.getRow();
        const endCol = endPosition.getColumn().charCodeAt(0);
        if(this.getColor() === 'white'){
            const rightPiece = board.getPiece(new Position(numberToRow[endRow - 1], asciiToColumn[endCol - 1]));
            const leftPiece = board.getPiece(new Position(numberToRow[endRow- 1], asciiToColumn[endCol + 1]));
            return rightPiece || leftPiece;
        } else {
            const rightPiece = board.getPiece(new Position(numberToRow[endRow + 1], asciiToColumn[endCol - 1]));
            const leftPiece = board.getPiece(new Position(numberToRow[endRow + 1], asciiToColumn[endCol + 1]));
            return rightPiece || leftPiece;
        }
    }

}