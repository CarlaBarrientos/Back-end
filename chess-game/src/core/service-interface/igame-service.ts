import Game from '../entities/game';
export interface IGameService {
    createGame(): Promise<Game>;
    restartGame(id: string): Promise<Game>;
}