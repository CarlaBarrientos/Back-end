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

    changeCurrentTurn() {
        this.currentTurn = this.currentTurn === 'white' ? 'black' : 'white';
    }

    isCurrentTurn(turn: Color) {
        return this.currentTurn === turn;
    }

    addMove(move: Move) {
        this.moves.push(move);
    }

    restartGame() {
        this.moves = [];
        this.board = new Board();
        this.board.fillBoardWithPieces();
        this.currentTurn = 'white';
        this.status = 'playing';
    }
}