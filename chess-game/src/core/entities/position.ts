import { Column, Row } from './types';
import Piece from './piece';
export default class Position {
    constructor(
        private column: Column,
        private row: Row,
        private piece: Piece | null
    ){}

    getColumn() {
        return this.column;
    }

    getRow() {
        return this.row;
    }

    getPiece() {
        return this.piece;
    }

    setPiece(piece: Piece | null) {
        this.piece = piece;
    }

}
