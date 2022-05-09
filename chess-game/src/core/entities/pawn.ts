import Board from "./board";
import Piece from "./piece";
import Position from "./position";

export default class Pawn extends Piece {
    canMove(board: Board, position: Position): boolean {
        return false;
    }
}