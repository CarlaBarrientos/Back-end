import Game from '../entities/game';
import Player from '../entities/player';
export interface IGameService {
    getGame(): Promise<Game>;
    createGame(): Promise<Game>;
    restartGame(): Promise<Game>;
    joinGame(player: Player): Promise<Game>;
}