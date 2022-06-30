import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "../../domain/types";
import IAttendanceRepository from '../repository-interfaces/iattendance.repository';
import AttendanceRepository from '../../infraestructure/repository/attendance.repository';
import IAttendanceService from '../service-interfaces/iattendance.service';
import AttendanceService from './attendance.service';

export const container = new Container();
container.bind<IAttendanceRepository>(TYPES.IAttendanceRepository).to(AttendanceRepository);
container.bind<IAttendanceService>(TYPES.IAttendanceService).to(AttendanceService);