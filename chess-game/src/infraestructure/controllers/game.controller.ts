import * as express from 'express';
import { interfaces, controller, httpGet, httpPost, request, response, httpPut } from "inversify-express-utils";
import GameService from '../../core/service/game-service';
import GameRepository from '../repository-implementation/game-repository';

@controller("/game")
export default class GameController implements interfaces.Controller {
    private _gameService;
    constructor() {
        this._gameService = new GameService(new GameRepository);   
    }
    @httpGet("/")
    public async startGame (@request() req: express.Request, @response() res: express.Response) {
        try {
        const game = await this._gameService.createGame();
        res.status(200).json(game);
        } catch(error) {
        res.status(400).json(error);
        }
    }
    @httpPut("/")
    public async restartGame (@request() req: express.Request, @response() res: express.Response) {
        try {
        const id = req.body.id;
        const game = await this._gameService.restartGame(id);
        res.status(200).json(game);
        } catch(error) {
        res.status(400).json(error);
        }
    }
}