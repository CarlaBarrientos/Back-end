import { injectable } from 'inversify';
import game from '../../core/entities/game';
import Game from '../../core/entities/game';
import IGameRepository from '../../core/repository-interface/igame.repository';
import Player from '../../core/entities/player';
import { PieceEntity } from '../database/entities/piece';
import { myDataSource } from '../database/database';

@injectable()
export default class GameRepository implements IGameRepository{
    //private pieceRepository = myDataSource.getMongoRepository(PieceEntity)

    public async create(game: Game): Promise<game> {
        let newGame = new Promise<Game>((resolve) => {
            resolve(game);
        });
        return newGame;
    }
    
    public async get(game: Game): Promise<Game> {
        let currentGame = new Promise<Game>((resolve) => {
            resolve(game);
        });
        return currentGame;
    }

    public async update(game: game): Promise<game> {
        let currentGame = new Promise<Game>((resolve) => {
            resolve(game);
        });
        return currentGame;
    }

    public async addPlayers(game: Game): Promise<Game> {
        let currentGame = new Promise<Game>((resolve) => {
            resolve(game);
        });
        return currentGame;
    }
}