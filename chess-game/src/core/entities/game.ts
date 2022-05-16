import Player from './player';
import { Column, GameStatus, Row, Color, row, column } from './types';
import Position from './position';
import Move from './move';
import Piece from './piece';
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

    setPlayers (player: Player) {
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
        this.status = 'ready';
    }

    checkPiece(position: Position) {
        const col = Number(Object.keys(row).find(k=>column[k]===position.getColumn()));
        if(this.board.getBoard()[position.getRow()-1][col].getPiece() !== null){
            return true;
        };
        return false;
    }

    checkEmpty(position: Position) {
        const col = Number(Object.keys(row).find(k=>column[k]===position.getColumn()));
        if(this.board.getBoard()[position.getRow()-1][col].getPiece() === null){
            return true;
        };
        return false;
    }

    checkMove(initialPosition: Position, endPosition: Position) {
        const endCol = Number(Object.keys(row).find(k=>column[k]===endPosition.getColumn()));
        const initialCol = Number(Object.keys(row).find(k=>column[k]===initialPosition.getColumn()));
        ;
        if(this.checkPiece(initialPosition) && this.checkEmpty(endPosition)
        && this.canMove(this.board.getBoard()[initialPosition.getRow()-1][initialCol].getPiece(), initialPosition, endPosition)) {
            this.board.getBoard()[endPosition.getRow()-1][endCol].setPiece(initialPosition.getPiece());
            this.board.getBoard()[initialPosition.getRow()-1][initialCol].setPiece(null);
            this.currentTurn = this.currentTurn === 'white' ? 'black' : 'white';
            return true;
        }
        return false;
    }

    canMove(piece: Piece | null, initialPosition: Position, endPosition: Position) {
        return piece?.canMove(initialPosition, endPosition);
    }
}