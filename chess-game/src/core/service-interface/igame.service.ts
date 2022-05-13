import Game from '../entities/game';
import Player from '../entities/player';
export interface IGameService {
    getGame(game: Game): Promise<Game>;
    createGame(game: Game): Promise<Game>;
    restartGame(game: Game): Promise<Game>;
    joinGame(game: Game, player: Player): Promise<Game>;
}