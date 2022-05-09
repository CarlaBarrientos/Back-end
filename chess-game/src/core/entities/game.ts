import Board from './board';
import Player from './player';
import { GameStatus } from './types';
export default class Game {
    private currentTurn!: Player;
    private status!: GameStatus;
    constructor(private board: Board, private player1: Player, private player2: Player) {
        this.currentTurn = this.player1.getColor() === 'white' ? this.player1 : this.player2;
    }

    getBoard(): Board {
        return this.board;
    }
}