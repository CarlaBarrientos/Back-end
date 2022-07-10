import * as express from 'express';
import { inject } from "inversify";
import { controller, httpDelete, httpGet, httpPost, httpPut, queryParam, request, requestParam, response } from "inversify-express-utils";
import { TYPES } from "../../types";
import IUserService from '../../application/service-interfaces/iuser.service';
import { UserDto } from './dtos/userDto';
import { UserMapper } from '../userMapper';
import { HttpStatusCode } from '../../application/exceptions/httpStatusCode';

@controller("/users")
export default class UserController {
  constructor(@inject(TYPES.IUserService) private readonly _userService: IUserService) { }

  @httpGet("/")
  public async getUser(@queryParam("name") name: string, @queryParam("nickname") nickname: string, @queryParam("id") id: string, @request() req: express.Request, @response() res: express.Response) {
    try {
      const users = await this._userService.getUsers(name, nickname, id);
      res.status(HttpStatusCode.OK).send(users.map((user) => UserMapper.toDtoFromUser(user)));
    } catch (error: any) {
      res.status(error.httpCode).send(error);
    }

  }


  @httpPost("/")
  public async createUser(@request() req: express.Request, @response() res: express.Response) {
    try {
      const data: UserDto =
      {
        name: req.body.name,
        lastname: req.body.lastname,
        nickname: req.body.nickname
      }
      const createdUser = await this._userService.createUser(data);
      res.status(HttpStatusCode.CREATED).send(UserMapper.toDtoFromUser(createdUser));
    } catch (error: any) {
      res.status(error.httpCode).send(error);
    }

  }

  @httpDelete("/:id")
  public async deleteUser(@requestParam("id") id: string, @request() req: express.Request, @response() res: express.Response) {
    try {
      const userId = id;
      const removeduser = await this._userService.removeUser(userId);
      res.status(HttpStatusCode.OK).send(UserMapper.toDtoFromUser(removeduser));
    } catch(error: any) {
      res.status(error.httpCode).send(error);
    }
  }

  @httpPut("/:id")
  public async updateAttendance(@requestParam("id") id: string, @request() req: express.Request, @response() res: express.Response) {
    try {
      const updatedUser = await this._userService.updateAttendance(id, req.body.attendance);
      res.status(HttpStatusCode.OK).send(UserMapper.toDtoFromUser(updatedUser));
    } catch(error: any) {
      res.status(error.httpCode).send(error);
    }    
  }
}