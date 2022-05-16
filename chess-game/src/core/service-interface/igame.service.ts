import Game from '../entities/game';
import Move from '../entities/move';
import Player from '../entities/player';
export interface IGameService {
    getGame(game: Game): Promise<Game>;
    createGame(game: Game): Promise<Game>;
    restartGame(game: Game): Promise<Game>;
    joinGame(player: Player, game: Game): Promise<Game>;
    movePiece(move: Move, game: Game): Promise<Game>;
}