import * as express from 'express';
import { interfaces, controller, httpGet, httpPost, request, response, httpPut, requestParam } from "inversify-express-utils";
import Game from '../../core/entities/game';
import { IGameService } from '../../core/service-interface/igame.service';
import { inject } from 'inversify';
import { TYPES } from '../../core/entities/types';
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
            res.send(error);
        }
    }

    @httpGet("/:id")
    public async getCurrentGame (@requestParam("id") id: string, @request() req: express.Request, @response() res: express.Response) {
        try {
            game = await this._gameService.getGame(game);
            res.status(200).json(game);
        } catch(error) {
            res.send(error);
        }
    }

    @httpPut("/restart")
    public async restartGame (@requestParam("id") id: string, @request() req: express.Request, @response() res: express.Response) {
        try {
        game = await this._gameService.restartGame(game);
        res.status(200).json(game);
        } catch(error) {
            res.send(error);
        }
    }

    @httpPost("/join")
    public async joinGame (@request() req: express.Request, @response() res: express.Response) {
        try {
            const newPlayer = req.body;
            game = await this._gameService.joinGame(new Player(newPlayer.color), game);
            res.status(200).json(game.getPlayers());
        } catch(error) {
            res.send(error);
        }
    }

    @httpPut("/move")
    public async movePiece(@request() req: express.Request, @response() res: express.Response) {
        try {
            const player = req.body.player;
            const startPosition = req.body.startPosition;
            const endPosition = req.body.endPosition;
            game = await this._gameService.movePiece(new Move(
                new Player(player.color), 
                new Position(startPosition.row, startPosition.column),
                new Position(endPosition.row, endPosition.column)), game);
            res.status(200).json(game);
        } catch(error) {
            res.send(error);
        }
    }
}