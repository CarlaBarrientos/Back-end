import Game from '../entities/game';
export interface IGameService {
    createGame(): Promise<Game>;
}