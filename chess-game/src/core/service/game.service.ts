import { inject, injectable } from 'inversify';
import Game from '../entities/game';
import { TYPES } from '../entities/types';
import { IGameService } from '../service-interface/igame.service';
import IGameRepository from '../repository-interface/igame.repository';
import Player from '../entities/player';
import Move from '../entities/move';
import Board from '../entities/board';

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
        if(game.getStatus() === 'playing' || game.getStatus() === 'ready'){
            if(move.getPlayer().getColor() === game.getCurrentTurn()) {
                if(game.checkMove(move.getStartPosition(), move.getEndPosition())) {
                    game.setMoves(move);
                    game.setStatus('playing');
                    return this._gameRepository.update(game);
                } else {
                    return new Promise<Game>((resolve, reject)=>{
                        reject('Move not valid.');
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
} 