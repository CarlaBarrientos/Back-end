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
        this.pieces = this.fillBoardWithPieces();
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

    // getBoard() {
    //     this.blackPieces.filter((piece) => piece.getPosition() === startPosition)
    //     return this.board;
    // }

    // movePiece(startPosition: Position, endPosition: Position) {
    //     const startRow = startPosition.getRow() - 1;
    //     const endRow = endPosition.getRow() - 1;
    //     const startColumn = Number(Object.keys(column).find(k=>column[k] === startPosition.getColumn()));
    //     const endColumn = Number(Object.keys(column).find(k=>column[k] === endPosition.getColumn()));
    //     const piece = this.board[startRow][startColumn].getPiece();
    //     this.board[endRow][endColumn].setPiece(piece);
    //     this.board[startRow][startColumn].setPiece(null);
    // }

    // initBoard(): Position[][] {
    //     for (let i = 0; i < 8; i++) {
    //         this.board[i] = [];
    //         for (let j = 0; j < 8; j++) {
    //             this.board[i][j] = new Position(column[j], row[i], null);
    //         }
    //     }
    //     return this.board;
    // }

    fillBoardWithPieces(): Piece[] {
        const pieces: Piece[] = []

        pieces.push(new Rook('white', 'rook', 1, 'A'));
        pieces.push(new Knight('white', 'knight', 1, 'B'));
        pieces.push(new Bishop('white', 'bishop', 1, 'C'));
        pieces.push(new King('white', 'king', 1, 'D'));
        pieces.push(new Queen('white', 'queen', 1, 'E'));
        pieces.push(new Bishop('white', 'bishop', 1, 'F'));
        pieces.push(new Knight('white', 'knight', 1, 'G'));
        pieces.push(new Rook('white', 'rook', 1, 'H'));
        pieces.push(new Pawn('white', 'pawn', 2,'A'));
        pieces.push(new Pawn('white', 'pawn', 2,'B'));
        pieces.push(new Pawn('white', 'pawn', 2,'C'));
        pieces.push(new Pawn('white', 'pawn', 2,'D'));
        pieces.push(new Pawn('white', 'pawn', 2,'E'));
        pieces.push(new Pawn('white', 'pawn', 2,'F'));
        pieces.push(new Pawn('white', 'pawn', 2,'G'));
        pieces.push(new Pawn('white', 'pawn', 2,'H'));


        pieces.push(new Pawn('black', 'pawn', 7, 'A'));
        pieces.push(new Pawn('black', 'pawn', 7, 'B'));
        pieces.push(new Pawn('black', 'pawn', 7, 'C'));
        pieces.push(new Pawn('black', 'pawn', 7, 'D'));
        pieces.push(new Pawn('black', 'pawn', 7, 'E'));
        pieces.push(new Pawn('black', 'pawn', 7, 'F'));
        pieces.push(new Pawn('black', 'pawn', 7, 'G'));
        pieces.push(new Pawn('black', 'pawn', 7, 'H'));
        pieces.push(new Rook('black', 'rook', 8, 'A'));
        pieces.push(new Knight('black', 'knight', 8, 'B'));
        pieces.push(new Bishop('black', 'bishop',8 ,'C'));
        pieces.push(new King('black', 'king',8, 'D'));
        pieces.push(new Queen('black', 'queen', 8, 'E'));
        pieces.push(new Bishop('black', 'bishop', 8, 'F'));
        pieces.push(new Knight('black', 'knight', 8, 'G'));
        pieces.push(new Rook('black', 'rook', 8, 'H'));

        return pieces;
    }

    // initGame() {

    //     this.board[0][0] = new Position('A', 1);
    //     this.board[0][1] = new Position('B', 1);
    //     this.board[0][2] = new Position('C', 1, new Bishop('white', 'bishop', 1, 'C'));
    //     this.board[0][3] = new Position('D', 1, new King('white', 'king', 1, 'D'));
    //     this.board[0][4] = new Position('E', 1, new Queen('white', 'queen', 1, 'E'));
    //     this.board[0][5] = new Position('F', 1, new Bishop('white', 'bishop', 1, 'F'));
    //     this.board[0][6] = new Position('G', 1, new Knight('white', 'knight', 1, 'G'));
    //     this.board[0][7] = new Position('H', 1, new Rook('white', 'rook', 1, 'H'));
    //     this.board[1][0] = new Position('A', 2, new Pawn('white', 'pawn', 2,'A'));
    //     this.board[1][1] = new Position('B', 2, new Pawn('white', 'pawn', 2,'B'));
    //     this.board[1][2] = new Position('C', 2, new Pawn('white', 'pawn', 2,'C'));
    //     this.board[1][3] = new Position('D', 2, new Pawn('white', 'pawn', 2,'D'));
    //     this.board[1][4] = new Position('E', 2, new Pawn('white', 'pawn', 2,'E'));
    //     this.board[1][5] = new Position('F', 2, new Pawn('white', 'pawn', 2,'F'));
    //     this.board[1][6] = new Position('G', 2, new Pawn('white', 'pawn', 2,'G'));
    //     this.board[1][7] = new Position('H', 2, new Pawn('white', 'pawn', 2,'H'));

    //     this.board[6][0] = new Position('A', 7, new Pawn('black', 'pawn', 7, 'A'));
    //     this.board[6][1] = new Position('B', 7, new Pawn('black', 'pawn', 7, 'B'));
    //     this.board[6][2] = new Position('C', 7, new Pawn('black', 'pawn', 7, 'C'));
    //     this.board[6][3] = new Position('D', 7, new Pawn('black', 'pawn', 7, 'D'));
    //     this.board[6][4] = new Position('E', 7, new Pawn('black', 'pawn', 7, 'E'));
    //     this.board[6][5] = new Position('F', 7, new Pawn('black', 'pawn', 7, 'F'));
    //     this.board[6][6] = new Position('G', 7, new Pawn('black', 'pawn', 7, 'G'));
    //     this.board[6][7] = new Position('H', 7, new Pawn('black', 'pawn', 7, 'H'));
    //     this.board[7][0] = new Position('A', 8, new Rook('black', 'rook', 8, 'A'));
    //     this.board[7][1] = new Position('B', 8, new Knight('black', 'knight', 8, 'B'));
    //     this.board[7][2] = new Position('C', 8, new Bishop('black', 'bishop',8 ,'C'));
    //     this.board[7][3] = new Position('D', 8, new King('black', 'king',8, 'D'));
    //     this.board[7][4] = new Position('E', 8, new Queen('black', 'queen', 8, 'E'));
    //     this.board[7][5] = new Position('F', 8, new Bishop('black', 'bishop', 8, 'F'));
    //     this.board[7][6] = new Position('G', 8, new Knight('black', 'knight', 8, 'G'));
    //     this.board[7][7] = new Position('H', 8, new Rook('black', 'rook', 8, 'H'));
    // }
}