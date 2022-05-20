import Board from "./board";
import Position from "./position";
import { Color, PieceName, Row, Column } from './types';
export default abstract class Piece {
    protected position: Position;

    constructor(
        private readonly color: Color,
        private readonly name: PieceName,
        row: Row,
        column: Column
    ){
        this.position = new Position(row, column);

    }
    
    getColor() {
        return this.color;
    }

    getPosition() {
        return this.position;
    }

    canEat(board: Board, endPosition: Position): Piece | undefined {
        const eatenPiece = board.getPiece(endPosition);
        if(eatenPiece !== undefined && eatenPiece.getColor() !== this.color) {
            return eatenPiece;
        }
        return undefined;
    }

    eatPiece(board: Board, eatenPiece: Piece) {
        board.removePiece(eatenPiece)
    }

    moveTo(position: Position) {
        this.position = position;
    }
    
    abstract canMove(board: Board, endPosition: Position): boolean;
}
