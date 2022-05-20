import Bishop from "./bishop";
import King from "./king";
import Knight from "./knight";
import Pawn from "./pawn";
import Piece from "./piece";
import Position from './position';
import Queen from "./queen";
import Rook from "./rook";

export default class Board{
    private pieces: Piece[];

    constructor() {
        this.pieces = [];
    }

    getBlackPieces() {
        return this.pieces.filter((piece) => piece.getColor() === 'black');
    }

    getWhitePieces() {
        return this.pieces.filter((piece) => piece.getColor() === 'white');
    }

    getPieces() {
        return this.pieces;
    }

    addPiece(piece: Piece) {
        this.pieces.push(piece);
    }

    removePiece(pieceToRemove: Piece) {
        let index = this.pieces.indexOf(pieceToRemove);
        this.pieces.splice(index, 1);
    }

    getPiece(position: Position): Piece | undefined {
        const piece = this.getPieces().find((piece) =>
            piece.getPosition().getRow() === position.getRow()
            && piece.getPosition().getColumn() === position.getColumn()
        );
        return piece;
    }

    fillBoardWithPieces() {

        this.addPiece(new Rook('white', 'rook', 1, 'A'));
        this.addPiece(new Knight('white', 'knight', 1, 'B'));
        this.addPiece(new Bishop('white', 'bishop', 1, 'C'));
        this.addPiece(new King('white', 'king', 1, 'D'));
        this.addPiece(new Queen('white', 'queen', 1, 'E'));
        this.addPiece(new Bishop('white', 'bishop', 1, 'F'));
        this.addPiece(new Knight('white', 'knight', 1, 'G'));
        this.addPiece(new Rook('white', 'rook', 1, 'H'));
        this.addPiece(new Pawn('white', 'pawn', 2,'A'));
        this.addPiece(new Pawn('white', 'pawn', 2,'B'));
        this.addPiece(new Pawn('white', 'pawn', 2,'C'));
        this.addPiece(new Pawn('white', 'pawn', 2,'D'));
        this.addPiece(new Pawn('white', 'pawn', 2,'E'));
        this.addPiece(new Pawn('white', 'pawn', 2,'F'));
        this.addPiece(new Pawn('white', 'pawn', 2,'G'));
        this.addPiece(new Pawn('white', 'pawn', 2,'H'));


        this.addPiece(new Pawn('black', 'pawn', 7, 'A'));
        this.addPiece(new Pawn('black', 'pawn', 7, 'B'));
        this.addPiece(new Pawn('black', 'pawn', 7, 'C'));
        this.addPiece(new Pawn('black', 'pawn', 7, 'D'));
        this.addPiece(new Pawn('black', 'pawn', 7, 'E'));
        this.addPiece(new Pawn('black', 'pawn', 7, 'F'));
        this.addPiece(new Pawn('black', 'pawn', 7, 'G'));
        this.addPiece(new Pawn('black', 'pawn', 7, 'H'));
        this.addPiece(new Rook('black', 'rook', 8, 'A'));
        this.addPiece(new Knight('black', 'knight', 8, 'B'));
        this.addPiece(new Bishop('black', 'bishop',8 ,'C'));
        this.addPiece(new King('black', 'king',8, 'D'));
        this.addPiece(new Queen('black', 'queen', 8, 'E'));
        this.addPiece(new Bishop('black', 'bishop', 8, 'F'));
        this.addPiece(new Knight('black', 'knight', 8, 'G'));
        this.addPiece(new Rook('black', 'rook', 8, 'H'));

    }
}