import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import IAttendanceRepository from './application/repository-interfaces/iattendance.repository';
import AttendanceRepository from './infraestructure/repository/attendance.repository';
import IAttendanceService from './application/service-interfaces/iattendance.service';
import AttendanceService from './application/services/attendance.service';
import IUserService from "./application/service-interfaces/iuser.service";
import UserService from "./application/services/user.service";

export const container = new Container();
container.bind<IAttendanceRepository>(TYPES.IAttendanceRepository).to(AttendanceRepository);
container.bind<IAttendanceService>(TYPES.IAttendanceService).to(AttendanceService);
container.bind<IUserService>(TYPES.IUserService).to(UserService);