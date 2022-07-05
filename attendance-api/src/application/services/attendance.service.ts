import { inject, injectable } from "inversify";
import { TYPES } from "../../domain/types";
import IAttendanceRepository from "../repository-interfaces/iattendance.repository";
import IAttendanceService from "../service-interfaces/iattendance.service";
import { AttendanceMapper } from '../../domain/attendanceMapper';
import { AttendanceDto } from "../../infraestructure/controllers/dtos/attendanceDto";
import Attendance from "../../domain/entities/attendance";
import axios from "axios";  
import { UserNotFoundError } from "./errors/errors";

@injectable()
export default class AttendanceService implements IAttendanceService {
    constructor(@inject(TYPES.IAttendanceRepository) private readonly _attendanceRepository: IAttendanceRepository){}

    async getAttendances(userId?: string): Promise<Attendance[]> {
        const attendances = await this._attendanceRepository.getAttendances(userId);
        return attendances.map((attendance) => AttendanceMapper.toAttendanceFromEntity(attendance));      
    }

    async createAttendance(attendance: AttendanceDto): Promise<Attendance> {
        const user = await (await axios.get(`${process.env.USERS_API}?id=${attendance.userId}`)).data;
        if(user.length > 0) {
            const createdAttendance = await this._attendanceRepository.cerateAttendance(AttendanceMapper.toAttendanceFromDto(attendance));
            return AttendanceMapper.toAttendanceFromEntity(createdAttendance);
        } else {
            throw new UserNotFoundError();
        }
    }

    async removeAttendance(id: string): Promise<Attendance> {
        const removedAttendance = await this._attendanceRepository.removeAttendance(id);
        return AttendanceMapper.toAttendanceFromEntity(removedAttendance);
    }

    async removeUserAttendances(userId: string): Promise<void> {
        this._attendanceRepository.removeUserAttendances(userId);
    }

}