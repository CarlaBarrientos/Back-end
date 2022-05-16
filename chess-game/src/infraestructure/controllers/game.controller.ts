import * as express from 'express';
import { interfaces, controller, httpGet, httpPost, request, response, httpPut, requestParam } from "inversify-express-utils";
import GameService from '../../core/service/game.service';
import GameRepository from '../repository-implementation/game.repository';
import Game from '../../core/entities/game';
import { IGameService } from '../../core/service-interface/igame.service';
import { inject } from 'inversify';
import { TYPES, column } from '../../core/entities/types';
import Player from '../../core/entities/player';
import Move from '../../core/entities/move';
import Position from '../../core/entities/position';

let game = new Game();

@controller("/game")
export default class GameController implements interfaces.Controller {

    constructor(@inject(TYPES.IGameService) private readonly _gameService: IGameService){}
    @httpPost("/")
    public async startGame (@request() req: express.Request, @response() res: express.Response) {
        try {
            game = await this._gameService.createGame(game);
            res.status(201).json(game);
        } catch(error) {
            res.status(400).json(error);
        }
    }
    @httpGet("/:id")
    public async getCurrentGame (@requestParam("id") id: string, @request() req: express.Request, @response() res: express.Response) {
        try {
            game = await this._gameService.getGame(game);
            res.status(200).json(game);
        } catch(error) {
            res.status(400).json(error);
        }
    }
    @httpPut("/restart")
    public async restartGame (@requestParam("id") id: string, @request() req: express.Request, @response() res: express.Response) {
        try {
        game = await this._gameService.restartGame(game);
        res.status(200).json(game);
        } catch(error) {
            res.status(400).json(error);
        }
    }
    @httpPost("/join")
    public async joinGame (@request() req: express.Request, @response() res: express.Response) {
        try {
            const newPlayer = req.body;
            game = await this._gameService.joinGame(new Player(newPlayer.color, newPlayer.name), game);
            res.status(200).json(game.getPlayers());
        } catch(error) {
            res.status(400).json(error);
        }
    }
    @httpPost("/move")
    public async movePiece(@request() req: express.Request, @response() res: express.Response) {
        try {
            const move = req.body;
            game = await this._gameService.movePiece(new Move(
                new Player(move.player.color, move.player.name), 
                new Position(move.startPosition.column, move.startPosition.row, move.startPosition.piece),
                new Position(move.endPosition.column, move.endPosition.row, move.endPosition.piece)), game);
            res.status(200).json(game);
        } catch(error) {
            res.status(400).json(error);
        }
    }
}