import { injectable } from 'inversify';
import game from '../../core/entities/game';
import Game from '../../core/entities/game';
import Board from '../../core/entities/board';
import IGameRepository from '../../core/repository-interface/igame-repository';
import Repository from './repository';
import Player from '../../core/entities/player';

@injectable()
//export default class GameRepository extends Repository<Game, GameEntity> implements IGameRepository{
export default class GameRepository extends Repository<Game> implements IGameRepository{
    public async create(game: Game): Promise<Game> {
        let newGame = new Promise<Game>((resolve: (arg0: game) => void) => {
            resolve(game);
        });
        return newGame;
    }
    public async update(id: string, game: game): Promise<game> {
        let newGame = new Promise<Game>((resolve: (arg0: game) => void) => {
            resolve(game);
        });
        return newGame;
    }
}