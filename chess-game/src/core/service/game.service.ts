import { inject } from 'inversify';
import Game from '../entities/game';
import { TYPES, GameStatus } from '../entities/types';
import { IGameService } from '../service-interface/igame.service';
import IGameRepository from '../repository-interface/igame.repository';
import Player from '../entities/player';
import IRepository from '../repository-interface/irepository';

export default class GameService extends Game implements IGameService {
    //constructor(@inject(TYPES.IGameRepository) private readonly _gameRepository: IGameRepository){}

    public async createGame(): Promise<Game> {
        return new Promise<Game>((resolve) => {
            resolve(this);
        });
        //return await this._gameRepository.create(game);
    }

    public async getGame(): Promise<Game> {
        return new Promise<Game>((resolve) => {
            resolve(this);
        });
        //return await this._gameRepository.get(game);
    }

    public async restartGame(): Promise<Game> {
        return new Promise<Game>((resolve) => {
            resolve(this);
        });
        //return await this._gameRepository.update(game);
    }

    public async joinGame(player: Player): Promise<Game> {
        if(this.getStatus() === 'waiting') {
            if(this.getPlayers().length === 0){
                this.setPlayers(player);
                return new Promise<Game>((resolve) => {
                    resolve(this);
                });
            } else if (this.getPlayers().length === 1){
                if(this.getPlayers()[0].color !== player.color){
                    this.setPlayers(player);
                    this.setStatus('ready');
                    return new Promise<Game>((resolve) => {
                        resolve(this);
                    });
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
        } else {
            return new Promise<Game>((resolve, reject) => {
                reject('The game is in progress you can not add more players.');
            });
        }        
        //return await this._gameRepository.update(game);
    }
} 