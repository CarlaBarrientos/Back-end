import * as express from 'express';
import { interfaces, controller, httpGet, httpPost, request, response, httpPut, requestParam } from "inversify-express-utils";
import GameService from '../../core/service/game.service';
import GameRepository from '../repository-implementation/game.repository';
import Game from '../../core/entities/game';

@controller("/game")
export default class GameController implements interfaces.Controller {
    private currentGame;
    private _gameService;
    constructor() {
        this._gameService = new GameService(new GameRepository);  
        this.currentGame = new Game(); 
    }
    @httpGet("/")
    public async startGame (@request() req: express.Request, @response() res: express.Response) {
        try {
        this.currentGame = await this._gameService.createGame(this.currentGame);
        res.status(200).json(this.currentGame);
        } catch(error) {
        res.status(400).json(error);
        }
    }
    @httpGet("/:id")
    public async getCurrentGame (@requestParam("id") id: string, @request() req: express.Request, @response() res: express.Response) {
        try {
        this.currentGame = await this._gameService.getGame(this.currentGame);
        res.status(200).json(this.currentGame);
        } catch(error) {
        res.status(400).json(error);
        }
    }
    @httpPut("/:id")
    public async restartGame (@requestParam("id") id: string, @request() req: express.Request, @response() res: express.Response) {
        try {
        const game = await this._gameService.restartGame(this.currentGame);
        res.status(200).json(game);
        } catch(error) {
        res.status(400).json(error);
        }
    }
    @httpPost("/join")
    public async joinGame (@request() req: express.Request, @response() res: express.Response) {
        try {
        const newPlayer = req.body;
        console.log(newPlayer);
        this.currentGame = await this._gameService.joinGame(this.currentGame, newPlayer);
        console.log(this.currentGame);
        res.status(200).json(this.currentGame);
        } catch(error) {
        res.status(400).json(error);
        }
    }
}