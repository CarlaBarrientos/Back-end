import * as express from 'express';
import { inject } from "inversify";
import { controller, httpDelete, httpGet, httpPost, httpPut, queryParam, request, requestParam, response } from "inversify-express-utils";
import { TYPES } from "../../types";
import IUserService from '../../application/service-interfaces/iuser.service';
import { UserDto } from './dtos/userDto';
import { UserMapper } from '../userMapper';
import Response from '../../domain/entities/response';

@controller("/users")
export default class UserController {
  constructor(@inject(TYPES.IUserService) private readonly _userService: IUserService) { }

  @httpGet("/")
  public async getUser(@queryParam("name") name: string, @queryParam("nickname") nickname: string, @queryParam("id") id: string, @request() req: express.Request, @response() res: express.Response) {
    const users = await this._userService.getUsers(id, name, nickname);
    const response = Response.ok(
      'Retrieved user(s).',
      users.map((user) => UserMapper.toDtoFromUser(user))
    )
    res.status(response.statusCode).json(response.responseContent);
  }


  @httpPost("/")
  public async createUser(@request() req: express.Request, @response() res: express.Response) {
      const data: UserDto =
      {
        name: req.body.name,
        lastname: req.body.lastname,
        nickname: req.body.nickname
      }
      const createdUser = await this._userService.createUser(UserMapper.toUserFromDto(data));
      const response = Response.created(
        'User created.',
        UserMapper.toDtoFromUser(createdUser)
      )
      res.status(response.statusCode).json(response.responseContent);
  }

  @httpDelete("/:id")
  public async deleteUser(@requestParam("id") id: string, @request() req: express.Request, @response() res: express.Response) {
      const userId = id;
      const removedUser = await this._userService.removeUser(userId);
      const response = Response.ok(
        'User Deleted.'
      )
      res.status(response.statusCode).json(response.responseContent);
  }

  @httpPut("/:id")
  public async updateAttendance(@requestParam("id") id: string, @request() req: express.Request, @response() res: express.Response) {
      const updatedUser = await this._userService.updateAttendance(id, req.body.attendance);
      const response = Response.ok(
        'User updated.',
        UserMapper.toDtoFromUser(updatedUser)
      )
      res.status(response.statusCode).json(response.responseContent);
  }
}