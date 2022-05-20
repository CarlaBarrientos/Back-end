import { inject, injectable } from 'inversify';
import Game from '../entities/game';
import { Color, TYPES } from '../entities/types';
import { IGameService } from '../service-interface/igame.service';
import IGameRepository from '../repository-interface/igame.repository';
import Player from '../entities/player';
import Move from '../entities/move';
import Board from '../entities/board';
import Piece from '../entities/piece';
import Position from '../entities/position';
import { CanNotJoinError, SameColorPlayersError, IncorrectTurnError, GameNotReadyError, MissingPieceError, InvalidMove } from './errors/errors';

@injectable()
export default class GameService implements IGameService {

    constructor(@inject(TYPES.IGameRepository) private readonly _gameRepository: IGameRepository){}

    public async createGame(game: Game): Promise<Game> {
        return this._gameRepository.create(game);
    }

    public async getGame(game: Game): Promise<Game> {
        return this._gameRepository.get(game);
    }

    public async restartGame(game: Game): Promise<Game> {
        game.restartGame();
        return await this._gameRepository.update(game);
    }

    public async joinGame(player: Player, game: Game): Promise<Game> {
        this.checkGameIsWaiting(game);

        if(game.getPlayers().length === 1) {
            this.checkPlayerColor(game, player);
            game.addPlayer(player);
            game.setStatus('playing');
            game.getBoard().fillBoardWithPieces();
        } else {
            game.addPlayer(player);
        }

        return this._gameRepository.update(game);
    }

    public async movePiece(move: Move, game: Game): Promise<Game> {
        const startPosition = move.getStartPosition();
        const endPosition = move.getEndPosition();
        const currentBoard = game.getBoard();
        const piece = currentBoard.getPiece(startPosition);

        this.checkPiece(piece);
        this.checkeGameIsPlaying(game);
        this.checkTurn(move.getPlayer().getColor(), game);
        
        if(piece?.canMove(currentBoard, endPosition)) {
            const eatenPiece = piece.canEat(currentBoard, endPosition); 
            if(eatenPiece !== undefined) {
                piece.eatPiece(currentBoard, eatenPiece);
            }
            piece.moveTo(endPosition);
            game.changeCurrentTurn();
            game.addMove(move);
        } else {
            throw new InvalidMove();
        }

        return this._gameRepository.update(game);    
    }

    private checkPiece(piece: Piece | undefined) {
        if(piece === undefined) {
            throw new MissingPieceError();
        }
    }

    private checkeGameIsPlaying(game: Game) {
        if(game.getStatus() !== 'playing'){
            throw new GameNotReadyError()
        }
    }

    private checkGameIsWaiting(game: Game){
        if(game.getStatus() !== 'waiting') {
            throw new CanNotJoinError(); 
        }
    }

    private checkPlayerColor(game: Game, player: Player) {
        if(game.getPlayers()[0].getColor() === player.getColor()) {
            throw new SameColorPlayersError();
        }
    }

    private checkTurn(playerColor: Color, game: Game) {
        if(!game.isCurrentTurn(playerColor)) {
            throw new IncorrectTurnError();
        }
    }

} 