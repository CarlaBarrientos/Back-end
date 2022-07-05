import * as express from 'express';
import { inject } from "inversify";
import { controller, httpDelete, httpGet, httpPost, queryParam, request, requestParam, response } from "inversify-express-utils";
import { TYPES } from "../../domain/types";
import IAttendanceService from '../../application/service-interfaces/iattendance.service';
import { AttendanceDto } from './dtos/attendanceDto';
import { AttendanceMapper } from '../../domain/attendanceMapper';
import { HttpStatusCode } from '../../application/services/errors/httpStatusCode';

@controller("/attendances")
export default class AttendanceController {
  constructor(@inject(TYPES.IAttendanceService) private readonly _attendanceService: IAttendanceService) { }

  @httpGet("/")
  public async getAttendance(@queryParam("userId") userId: string, @request() req: express.Request, @response() res: express.Response) {
    try {
      const attendances = await this._attendanceService.getAttendances(userId);
      res.status(HttpStatusCode.OK).send(attendances.map((attendance) => AttendanceMapper.toDtoFromAttendance(attendance)));    
    } catch (error: any) {
      res.status(error.httpCode).send(error);
    }

  }


  @httpPost("/")
  public async createAttendance(@request() req: express.Request, @response() res: express.Response) {
    try {
      const data: AttendanceDto =
      {
        fromHour: req.body.fromHour,
        toHour: req.body.toHour,
        date: req.body.date,
        notes: req.body.notes,
        userId: req.body.userId
      }
      const createdAttendance = await this._attendanceService.createAttendance(data);
      res.status(HttpStatusCode.CREATED).send(AttendanceMapper.toDtoFromAttendance(createdAttendance));
    } catch (error: any) {
      res.status(error.httpCode).send(error);
    }

  }

  @httpDelete("/:id")
  public async deleteAttendance(@requestParam("id") id: string, @request() req: express.Request, @response() res: express.Response) {
    try {
      const attendanceId = id;
      const removedattendance = await this._attendanceService.removeAttendance(attendanceId);
      res.status(HttpStatusCode.OK).send(AttendanceMapper.toDtoFromAttendance(removedattendance));
    } catch(error: any) {
      res.status(error.httpCode).send(error);
    }
    
  }
}