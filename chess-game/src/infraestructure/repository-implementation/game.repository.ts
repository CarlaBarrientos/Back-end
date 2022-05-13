import { injectable } from 'inversify';
import game from '../../core/entities/game';
import Game from '../../core/entities/game';
import IGameRepository from '../../core/repository-interface/igame.repository';
import Player from '../../core/entities/player';

@injectable()
//export default class GameRepository extends Repository<Game, GameEntity> implements IGameRepository{
export default class GameRepository implements IGameRepository{
    public async get(game: Game): Promise<Game> {
        console.log('here');
        console.log(game);
        let currentGame = new Promise<Game>((resolve) => {
            resolve(game);
        });
        return currentGame;
    }

    public async create(game: Game): Promise<Game> {
        let newGame = new Promise<Game>((resolve) => {
            resolve(game);
        });
        return newGame;
    }

    public async update(game: game): Promise<game> {
        let newGame = new Promise<Game>((resolve) => {
            resolve(game);
        });
        return newGame;
    }

    public async getPlayers(game: Game): Promise<Player[]> {
        let players = new Promise<Player[]>((resolve) => {
            resolve(game.getPlayers());
        });
        return players;
    }
}