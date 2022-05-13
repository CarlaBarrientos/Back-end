import Piece from "./piece";
import Position from "./position";

export default class Knight extends Piece {
    canMove(initialPosition: Position, finalPosition: Position): boolean {
        return false;
    }
}