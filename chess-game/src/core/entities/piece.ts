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

    getName() {
        return this.name;
    }

    moveTo(position: Position) {
        this.position = position;
    }
    
    abstract canMove(board: Board, initialPosition: Position, finalPosition: Position): boolean;
}
