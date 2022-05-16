import Game from '../entities/game';
import IRepository from './irepository';
export default interface IGameRepository extends IRepository<Game>{
    addPlayers(game: Game): Promise<Game>;
}