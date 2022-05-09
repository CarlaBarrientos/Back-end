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
    public async create(): Promise<Game> {
        let newGame = new Promise<Game>((resolve: (arg0: game) => void) => {
            const newGame = new Game(new Board(), new Player('white'), new Player('black'));
            console.log(newGame);
            resolve(newGame);
        })
        return newGame;
    }

}