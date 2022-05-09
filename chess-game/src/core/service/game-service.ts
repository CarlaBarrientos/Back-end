import { inject } from 'inversify';
import Game from '../entities/game';
import { TYPES } from '../entities/types';
import { IGameService } from '../service-interface/igame-service';
import IGameRepository from '../repository-interface/igame-repository';
import Board from '../entities/board';
import Player from '../entities/player';

export default class GameService implements IGameService {
    constructor(@inject(TYPES.IGameRepository) private readonly _gameRepository: IGameRepository){}

    public async createGame(): Promise<Game> {
        const newGame = new Game(new Board(), new Player('white'), new Player('black'));
        return await this._gameRepository.create(newGame);
    }

    public async restartGame(id: string): Promise<Game> {
        const resetGame = new Game(new Board(), new Player('white'), new Player('black'));
        return await this._gameRepository.update(id, resetGame);
    }
} 