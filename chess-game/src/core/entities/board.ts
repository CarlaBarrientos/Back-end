import Bishop from "./bishop";
import King from "./king";
import Knight from "./knight";
import Pawn from "./pawn";
import Position from "./position";
import Queen from "./queen";
import Rook from "./rook";
import { column, row } from "./types";

export default class Board{
    private board: Position[][] = [];
    constructor() {
        this.board = this.initBoard();
    }

    getBoard() {
        return this.board;
    }

    movePiece(startPosition: Position, endPosition: Position) {
        const startRow = startPosition.getRow() - 1;
        const endRow = endPosition.getRow() - 1;
        const startColumn = Number(Object.keys(column).find(k=>column[k] === startPosition.getColumn()));
        const endColumn = Number(Object.keys(column).find(k=>column[k] === endPosition.getColumn()));
        const piece = this.board[startRow][startColumn].getPiece();
        this.board[endRow][endColumn].setPiece(piece);
        this.board[startRow][startColumn].setPiece(null);
    }

    initBoard(): Position[][] {
        for (let i = 0; i < 8; i++) {
            this.board[i] = [];
            for (let j = 0; j < 8; j++) {
                this.board[i][j] = new Position(column[j], row[i], null);
            }
        }
        return this.board;
    }

    initGame() {

        this.board[0][0] = new Position('A', 1, new Rook('white','alive', 'rook'));
        this.board[0][1] = new Position('B', 1, new Knight('white','alive', 'knight'));
        this.board[0][2] = new Position('C', 1, new Bishop('white','alive', 'bishop'));
        this.board[0][3] = new Position('D', 1, new King('white','alive', 'king'));
        this.board[0][4] = new Position('E', 1, new Queen('white','alive', 'queen'));
        this.board[0][5] = new Position('F', 1, new Bishop('white','alive', 'bishop'));
        this.board[0][6] = new Position('G', 1, new Knight('white','alive', 'knight'));
        this.board[0][7] = new Position('H', 1, new Rook('white','alive', 'rook'));
        this.board[1][0] = new Position('A', 2, new Pawn('white','alive', 'pawn'));
        this.board[1][1] = new Position('B', 2, new Pawn('white','alive', 'pawn'));
        this.board[1][2] = new Position('C', 2, new Pawn('white','alive', 'pawn'));
        this.board[1][3] = new Position('D', 2, new Pawn('white','alive', 'pawn'));
        this.board[1][4] = new Position('E', 2, new Pawn('white','alive', 'pawn'));
        this.board[1][5] = new Position('F', 2, new Pawn('white','alive', 'pawn'));
        this.board[1][6] = new Position('G', 2, new Pawn('white','alive', 'pawn'));
        this.board[1][7] = new Position('H', 2, new Pawn('white','alive', 'pawn'));

        this.board[6][0] = new Position('A', 7, new Pawn('black','alive', 'pawn'));
        this.board[6][1] = new Position('B', 7, new Pawn('black','alive', 'pawn'));
        this.board[6][2] = new Position('C', 7, new Pawn('black','alive', 'pawn'));
        this.board[6][3] = new Position('D', 7, new Pawn('black','alive', 'pawn'));
        this.board[6][4] = new Position('E', 7, new Pawn('black','alive', 'pawn'));
        this.board[6][5] = new Position('F', 7, new Pawn('black','alive', 'pawn'));
        this.board[6][6] = new Position('G', 7, new Pawn('black','alive', 'pawn'));
        this.board[6][7] = new Position('H', 7, new Pawn('black','alive', 'pawn'));
        this.board[7][0] = new Position('A', 8, new Rook('black','alive', 'rook'));
        this.board[7][1] = new Position('B', 8, new Knight('black','alive', 'knight'));
        this.board[7][2] = new Position('C', 8, new Bishop('black','alive', 'bishop'));
        this.board[7][3] = new Position('D', 8, new King('black','alive', 'king'));
        this.board[7][4] = new Position('E', 8, new Queen('black','alive', 'queen'));
        this.board[7][5] = new Position('F', 8, new Bishop('black','alive', 'bishop'));
        this.board[7][6] = new Position('G', 8, new Knight('black','alive', 'knight'));
        this.board[7][7] = new Position('H', 8, new Rook('black','alive', 'rook'));
    }
}