import * as express from 'express';
import { inject, interfaces } from "inversify";
import { controller, httpGet, httpPost, request, response } from "inversify-express-utils";
import { TYPES } from "../../domain/types";
import IUserService from '../../application/service-interfaces/iuser.service';

@controller("/user")
export default class UserController {
    constructor(@inject(TYPES.IUserService) private readonly _userService: IUserService){}

    @httpGet("/")
    public getUser(@request() req: express.Request, @response() res: express.Response) {
        res.send('hello')
    }

    @httpPost("/")
    public createUser(@request() req: express.Request, @response() res: express.Response) {
        
    }
}