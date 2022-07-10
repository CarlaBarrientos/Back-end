import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import IUserRepository from './application/repository-interfaces/iuser.repository';
import UserRepository from './infraestructure/repository/user.repository';
import IUserService from './application/service-interfaces/iuser.service';
import UserService from './application/services/user.service';
import IAttendanceService from "./application/service-interfaces/iattendance.service";
import AttendanceService from "./application/services/attendance.service";

export const container = new Container();
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);
container.bind<IUserService>(TYPES.IUserService).to(UserService);
container.bind<IAttendanceService>(TYPES.IAttendanceService).to(AttendanceService);