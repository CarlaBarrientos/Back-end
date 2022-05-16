import { inject, injectable } from 'inversify';
import Game from '../entities/game';
import { Color, column, row, TYPES } from '../entities/types';
import { IGameService } from '../service-interface/igame.service';
import IGameRepository from '../repository-interface/igame.repository';
import Player from '../entities/player';
import Move from '../entities/move';
import Board from '../entities/board';
import Piece from '../entities/piece';
import Position from '../entities/position';

@injectable()
export default class GameService implements IGameService {

    constructor(@inject(TYPES.IGameRepository) private readonly _gameRepository: IGameRepository){}

    public async createGame(game: Game): Promise<Game> {
        return this._gameRepository.create(game);
    }

    public async getGame(game: Game): Promise<Game> {
        return this._gameRepository.get(game);
    }

    public async restartGame(game: Game): Promise<Game> {
        game.restartGame();
        return await this._gameRepository.update(game);
    }

    public async joinGame(player: Player, game: Game): Promise<Game> {
        if(game.getStatus() === 'waiting') {
            if(game.getPlayers().length === 0){
                game.setPlayers(player);
                return this._gameRepository.update(game);
            } else if(game.getPlayers().length === 1 && game.getPlayers()[0].getColor() !== player.getColor()) {
                game.setPlayers(player);
                game.setCurrentTurn(game.getPlayers()[0].getColor() === 'white' ? game.getPlayers()[0].getColor() : game.getPlayers()[1].getColor());
                game.setStatus('ready');
                return this._gameRepository.update(game);
            } else {
                return new Promise<Game>((resolve, reject) => {
                    reject('You can not add both players of the same color!');
                });
            }
        } else {
            return new Promise<Game>((resolve, reject) => {
                reject('The game is in progress you can not add more players.');
            });
        }        
    }

    public async movePiece(move: Move, game: Game): Promise<Game> {
        const initialColumn = Number(Object.keys(column).find(k=>column[k] === move.getStartPosition().getColumn()));
        let piece = game.getBoard().getBoard()[move.getStartPosition().getRow()-1][initialColumn].getPiece();
        if(game.getStatus() === 'playing' || game.getStatus() === 'ready'){
            if(this.checkTurn(move.getPlayer().getColor(), game.getCurrentTurn())) {
                if(this.pieceCanMove(piece , game.getBoard(), move.getStartPosition(), move.getEndPosition())) {
                    game.getBoard().movePiece(move.getStartPosition(), move.getEndPosition());//quizá falte el setter de board
                    game.setMoves(move);
                    game.setStatus('playing');
                    game.setCurrentTurn(game.getCurrentTurn() === 'white' ? 'black' : 'white');
                    return this._gameRepository.update(game);
                } else {
                    return new Promise<Game>((resolve, reject)=>{
                        reject('Move not valid!');
                    });
                }
            } else {
                return new Promise<Game>((resolve, reject)=>{
                    reject('It is not your turn.');
                });
            }
        } else {
            return new Promise<Game>((resolve, reject)=>{
                reject('Game is not ready.');
            });
        }
        
    }

    checkTurn(playerColor: Color, currentTurn: Color) {
        return playerColor === currentTurn ? true : false;
    }

    pieceCanMove(piece: Piece | null, board: Board, initialPosition: Position, endPosition: Position) {
        return piece?.canMove(board, initialPosition, endPosition);
    }
} 