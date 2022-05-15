import Position from "./position";
import { Color, PieceName, PieceStatus } from "./types";
export default abstract class Piece {
    constructor(
        private readonly color: Color,
        private status: PieceStatus,
        private readonly name: PieceName
    ){}
    
    getColor() {
        return this.color;
    }

    getStatus() {
        return this.status;
    }

    getName() {
        return this.name;
    }
    
    abstract canMove(initialPosition: Position, finalPosition: Position): boolean;
}
