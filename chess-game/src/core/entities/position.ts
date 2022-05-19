import { Column, Row } from './types';
import Piece from './piece';
export default class Position {

    constructor(
        private row: Row,
        private column: Column
    ){}

    getColumn() {
        return this.column;
    }

    getRow() {
        return this.row;
    }
}
