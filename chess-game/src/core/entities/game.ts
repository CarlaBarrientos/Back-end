import Player from './player';
import { Column, GameStatus, Row, Color } from './types';
import Position from './position';
import Rook from './rook';
import Knight from './knight';
import Bishop from './bishop';
import King from './king';
import Queen from './queen';
import Pawn from './pawn';
import Move from './move';
import Piece from './piece';
const column: {[key: string]: Column} ={
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    4: 'E',
    5: 'F',
    6: 'G',
    7: 'H'
}
const row: {[key: string]: Row} = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    5: 6,
    6: 7,
    7: 8
}
export default class Game {
    private board: Position[][] = [];
    private players: Player[];
    private moves: Move[];
    constructor(private status: GameStatus = 'waiting', private currentTurn = 'white') {
        this.initBoard()
        this.players = [];
        this.moves = [];
    }

    setBoard(board: Position[][]) {
        this.board = board;
    }
    getPlayers() {
        return this.players;
    }

    setPlayers (player: Player) {
        this.players.push(player);
    }

    setStatus(status: GameStatus) {
        this.status = status;
    }

    getStatus() {
        return this.status;
    }

    setCurrentTurn(color: Color) {
        this.currentTurn = color;
    }

    getCurrentTurn() {
        return this.currentTurn;
    }

    setMoves(move: Move) {
        this.moves.push(move);
    }

    getMoves() {
        return this.moves;
    }

    checkPiece(position: Position) {
        const col = Number(Object.keys(row).find(k=>column[k]===position.getColumn()));
        if(this.board[position.getRow()-1][col].getPiece() !== null){
            return true;
        };
        return false;
    }

    checkEmpty(position: Position) {
        const col = Number(Object.keys(row).find(k=>column[k]===position.getColumn()));
        if(this.board[position.getRow()-1][col].getPiece() === null){
            return true;
        };
        return false;
    }

    checkMove(initialPosition: Position, endPosition: Position) {
        const endCol = Number(Object.keys(row).find(k=>column[k]===endPosition.getColumn()));
        const initialCol = Number(Object.keys(row).find(k=>column[k]===initialPosition.getColumn()));
        ;
        if(this.checkPiece(initialPosition) && this.checkEmpty(endPosition)
        && this.canMove(this.board[initialPosition.getRow()-1][initialCol].getPiece(), initialPosition, endPosition)) {
            this.board[endPosition.getRow()-1][endCol].setPiece(initialPosition.getPiece());
            this.board[initialPosition.getRow()-1][initialCol].setPiece(null);
            this.currentTurn = this.currentTurn === 'white' ? 'black' : 'white';
            return true;
        }
        return false;
    }

    canMove(piece: Piece | null, initialPosition: Position, endPosition: Position) {
        return piece?.canMove(initialPosition, endPosition);
    }

    initBoard(): Position[] [] {
        this.moves = [];
        for (let i = 0; i < 8; i++) {
            this.board[i] = [];
            for (let j = 0; j < 8; j++) {
                this.board[i][j] = new Position(column[j], row[i], null);
            }
        }

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

        return this.board;
    }
}