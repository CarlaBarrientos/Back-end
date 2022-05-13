import Position from "./position";
import { Color, PieceName, PieceStatus } from "./types";
export default abstract class Piece {
    constructor(
        private readonly color: Color,
        private status: PieceStatus,
        private readonly name: PieceName
    ){}
    
    abstract canMove(initialPosition: Position, finalPosition: Position): boolean;
}
