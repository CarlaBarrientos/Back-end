import { inject } from 'inversify';
import Game from '../entities/game';
import { TYPES } from '../entities/types';
import { IGameService } from '../service-interface/igame.service';
import IGameRepository from '../repository-interface/igame.repository';
import Player from '../entities/player';
import IRepository from '../repository-interface/irepository';

export default class GameService implements IGameService {
    constructor(@inject(TYPES.IGameRepository) private readonly _gameRepository: IGameRepository & IRepository<Game>){}

    public async createGame(game: Game): Promise<Game> {
        return await this._gameRepository.create(game);
    }

    public async getGame(game: Game): Promise<Game> {
        console.log(game);
        return await this._gameRepository.get(game);
    }

    public async restartGame(game: Game): Promise<Game> {
        return await this._gameRepository.update(game);
    }

    public async joinGame(game: Game, player: Player): Promise<Game> {
        game.setPlayers(player);
        return await this._gameRepository.update(game);
    }
} 