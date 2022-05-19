import Player from './player';
import { GameStatus, Color } from './types';
import Move from './move';
import Board from './board';

export default class Game {
    private board: Board;
    private players: Player[];
    private moves: Move[];
    constructor(private status: GameStatus = 'waiting', private currentTurn: Color = 'white') {
        this.board = new Board();
        this.players = [];
        this.moves = [];
    }

    setBoard(board: Board) {
        this.board = board;
    }

    getBoard() {
        return this.board;
    }

    addPlayer (player: Player) {
        this.players.push(player);
    }

    getPlayers() {
        return this.players;
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

    restartGame() {
        this.moves = [];
        this.board = new Board();
        this.currentTurn = 'white';
        this.status = 'playing';
    }
}