import { inject } from 'inversify';
import Game from '../entities/game';
import { TYPES } from '../entities/types';
import { IGameService } from '../service-interface/igame-service';
import IGameRepository from '../repository-interface/igame-repository';

export default class GameService implements IGameService {
    constructor(@inject(TYPES.IGameRepository) private readonly _gameRepository: IGameRepository){}
    public async createGame(): Promise<Game> {
        return await this._gameRepository.create();
    }
} 