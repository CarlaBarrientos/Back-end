import * as express from 'express';
import { inject } from "inversify";
import { controller, httpDelete, httpGet, httpPost, queryParam, request, requestParam, response } from "inversify-express-utils";
import { TYPES } from "../../types";
import IAttendanceService from '../../application/service-interfaces/iattendance.service';
import { AttendanceDto } from './dtos/attendanceDto';
import { AttendanceMapper } from '../attendanceMapper';
import Response from '../../domain/entities/response';

@controller("/attendances")
export default class AttendanceController {
  constructor(@inject(TYPES.IAttendanceService) private readonly _attendanceService: IAttendanceService) { }

  @httpGet("/")
  public async getAttendance(@queryParam("userId") userId: string, @request() req: express.Request, @response() res: express.Response) {
    const attendances = await this._attendanceService.getAttendances(userId);
    const response = Response.ok(
      'Retrieved attendance(s).',
      attendances.map((attendance) => AttendanceMapper.toDtoFromAttendance(attendance))
    )
    res.status(response.statusCode).json(response.responseContent);
  }


  @httpPost("/")
  public async createAttendance(@request() req: express.Request, @response() res: express.Response) {
    const data: AttendanceDto =
    {
      fromHour: req.body.fromHour,
      toHour: req.body.toHour,
      date: req.body.date,
      notes: req.body.notes,
      userId: req.body.userId
    }
    const createdAttendance = await this._attendanceService.createAttendance(AttendanceMapper.toAttendanceFromDto(data));
    const response = Response.created(
      'Attendance created.',
      AttendanceMapper.toDtoFromAttendance(createdAttendance)
    )
    res.status(response.statusCode).json(response.responseContent);

  }

  @httpDelete("/:id")
  public async deleteAttendance(@requestParam("id") id: string, @request() req: express.Request, @response() res: express.Response) {
    const attendanceId = id;
    const removedattendance = await this._attendanceService.removeAttendance(attendanceId);
    const response = Response.ok(
      'Attendance Deleted.'
    )
    res.status(response.statusCode).json(response.responseContent);
  }

  @httpDelete("/users/:userId")
  public async deleteUserAttendances(@requestParam("userId") userId: string, @request() req: express.Request, @response() res: express.Response) {
    this._attendanceService.removeUserAttendances(userId);
    const response = Response.ok(
      'User attendances uppdated.'
    )
    res.status(response.statusCode).json(response.responseContent);

  }
}