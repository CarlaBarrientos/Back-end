import Piece from "./piece";
import Position from "./position";

export default class Rook extends Piece {
    canMove(initialPosition: Position, finalPosition: Position): boolean {
        return initialPosition.getRow() === finalPosition.getRow() 
        || initialPosition.getColumn() === finalPosition.getColumn() 
        ? true : false ;
    }
}