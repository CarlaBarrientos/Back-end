import Player from './player';
import { Column, GameStatus, Row } from './types';
import Position from './position';
import Rook from './rook';
import Knight from './knight';
import Bishop from './bishop';
import King from './king';
import Queen from './queen';
import Pawn from './pawn';
const column: {[key: number]: Column} ={
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    4: 'E',
    5: 'F',
    6: 'G',
    7: 'H'
}
const row: {[key: number]: Row} = {
    2: 3,
    3: 4,
    4: 5,
    5: 6,
}
export default class Game {
    private currentTurn!: Player;
    private board: Position[][];
    private players: Player[];
    constructor(private status: GameStatus = 'waiting') {
        this.board = this.initBoard();
        this.players = [];
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

    initBoard(): Position[] [] {
        let board: Position[][] = [];
        for (let i = 0; i < 8; i++) {
            board[i] = [];
            for (let j = 0; j < 8; j++) {
                board[i][j] = new Position(column[j], row[i], null);
            }
        }

        board[0][0] = new Position('A', 1, new Rook('white','alive', 'rook'));
        board[0][1] = new Position('B', 1, new Knight('white','alive', 'knight'));
        board[0][2] = new Position('C', 1, new Bishop('white','alive', 'bishop'));
        board[0][3] = new Position('D', 1, new King('white','alive', 'king'));
        board[0][4] = new Position('E', 1, new Queen('white','alive', 'queen'));
        board[0][5] = new Position('F', 1, new Bishop('white','alive', 'bishop'));
        board[0][6] = new Position('G', 1, new Knight('white','alive', 'knight'));
        board[0][7] = new Position('H', 1, new Rook('white','alive', 'rook'));
        board[1][0] = new Position('A', 2, new Pawn('white','alive', 'pawn'));
        board[1][1] = new Position('B', 2, new Pawn('white','alive', 'pawn'));
        board[1][2] = new Position('C', 2, new Pawn('white','alive', 'pawn'));
        board[1][3] = new Position('D', 2, new Pawn('white','alive', 'pawn'));
        board[1][4] = new Position('E', 2, new Pawn('white','alive', 'pawn'));
        board[1][5] = new Position('F', 2, new Pawn('white','alive', 'pawn'));
        board[1][6] = new Position('G', 2, new Pawn('white','alive', 'pawn'));
        board[1][7] = new Position('H', 2, new Pawn('white','alive', 'pawn'));

        board[6][0] = new Position('A', 7, new Pawn('black','alive', 'pawn'));
        board[6][1] = new Position('B', 7, new Pawn('black','alive', 'pawn'));
        board[6][2] = new Position('C', 7, new Pawn('black','alive', 'pawn'));
        board[6][3] = new Position('D', 7, new Pawn('black','alive', 'pawn'));
        board[6][4] = new Position('E', 7, new Pawn('black','alive', 'pawn'));
        board[6][5] = new Position('F', 7, new Pawn('black','alive', 'pawn'));
        board[6][6] = new Position('G', 7, new Pawn('black','alive', 'pawn'));
        board[6][7] = new Position('H', 7, new Pawn('black','alive', 'pawn'));
        board[7][0] = new Position('A', 8, new Rook('black','alive', 'rook'));
        board[7][1] = new Position('B', 8, new Knight('black','alive', 'knight'));
        board[7][2] = new Position('C', 8, new Bishop('black','alive', 'bishop'));
        board[7][3] = new Position('D', 8, new King('black','alive', 'king'));
        board[7][4] = new Position('E', 8, new Queen('black','alive', 'queen'));
        board[7][5] = new Position('F', 8, new Bishop('black','alive', 'bishop'));
        board[7][6] = new Position('G', 8, new Knight('black','alive', 'knight'));
        board[7][7] = new Position('H', 8, new Rook('black','alive', 'rook'));

        return board;
    }
}