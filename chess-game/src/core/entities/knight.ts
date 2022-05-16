import Board from "./board";
import Piece from "./piece";
import Position from "./position";

export default class Knight extends Piece {
    canMove(board: Board, initialPosition: Position, finalPosition: Position): boolean {
        return false;
    }
}