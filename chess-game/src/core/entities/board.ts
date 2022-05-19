import Bishop from "./bishop";
import King from "./king";
import Knight from "./knight";
import Pawn from "./pawn";
import Piece from "./piece";
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

    fillBoardWithPieces() {

        this.pieces.push(new Rook('white', 'rook', 1, 'A'));
        this.pieces.push(new Rook('white', 'rook', 1, 'A'));
        this.pieces.push(new Knight('white', 'knight', 1, 'B'));
        this.pieces.push(new Bishop('white', 'bishop', 1, 'C'));
        this.pieces.push(new King('white', 'king', 1, 'D'));
        this.pieces.push(new Queen('white', 'queen', 1, 'E'));
        this.pieces.push(new Bishop('white', 'bishop', 1, 'F'));
        this.pieces.push(new Knight('white', 'knight', 1, 'G'));
        this.pieces.push(new Rook('white', 'rook', 1, 'H'));
        this.pieces.push(new Pawn('white', 'pawn', 2,'A'));
        this.pieces.push(new Pawn('white', 'pawn', 2,'B'));
        this.pieces.push(new Pawn('white', 'pawn', 2,'C'));
        this.pieces.push(new Pawn('white', 'pawn', 2,'D'));
        this.pieces.push(new Pawn('white', 'pawn', 2,'E'));
        this.pieces.push(new Pawn('white', 'pawn', 2,'F'));
        this.pieces.push(new Pawn('white', 'pawn', 2,'G'));
        this.pieces.push(new Pawn('white', 'pawn', 2,'H'));


        this.pieces.push(new Pawn('black', 'pawn', 7, 'A'));
        this.pieces.push(new Pawn('black', 'pawn', 7, 'B'));
        this.pieces.push(new Pawn('black', 'pawn', 7, 'C'));
        this.pieces.push(new Pawn('black', 'pawn', 7, 'D'));
        this.pieces.push(new Pawn('black', 'pawn', 7, 'E'));
        this.pieces.push(new Pawn('black', 'pawn', 7, 'F'));
        this.pieces.push(new Pawn('black', 'pawn', 7, 'G'));
        this.pieces.push(new Pawn('black', 'pawn', 7, 'H'));
        this.pieces.push(new Rook('black', 'rook', 8, 'A'));
        this.pieces.push(new Knight('black', 'knight', 8, 'B'));
        this.pieces.push(new Bishop('black', 'bishop',8 ,'C'));
        this.pieces.push(new King('black', 'king',8, 'D'));
        this.pieces.push(new Queen('black', 'queen', 8, 'E'));
        this.pieces.push(new Bishop('black', 'bishop', 8, 'F'));
        this.pieces.push(new Knight('black', 'knight', 8, 'G'));
        this.pieces.push(new Rook('black', 'rook', 8, 'H'));

    }
}