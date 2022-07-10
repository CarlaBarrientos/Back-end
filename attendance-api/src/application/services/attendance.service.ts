import { inject, injectable } from "inversify";
import { TYPES } from "../../types";
import IAttendanceRepository from "../repository-interfaces/iattendance.repository";
import IAttendanceService from "../service-interfaces/iattendance.service";
import Attendance from "../../domain/entities/attendance";
import RabbitService from "./rabbit.service";
import { AttendanceNotFoundError, NotEmptyField, UserNotFoundError } from "../errors/errors";
import IUserService from "../service-interfaces/iuser.service";

@injectable()
export default class AttendanceService implements IAttendanceService {
    _rabbitService: RabbitService;
    constructor(@inject(TYPES.IAttendanceRepository) private readonly _attendanceRepository: IAttendanceRepository,
        @inject(TYPES.IUserService) private readonly _userService: IUserService) {
        this._rabbitService = RabbitService.getInstance();
    }

    async getAttendances(userId?: string): Promise<Attendance[]> {
        try {
            const attendances = await this._attendanceRepository.getAttendances(userId);
            return attendances;
        } catch (error: any) {
            throw error;
        }

    }

    async createAttendance(attendance: Attendance): Promise<Attendance> {
        if (!attendance.fromHour) {
            throw new NotEmptyField('FromHour');
        }
        if (!attendance.toHour) {
            throw new NotEmptyField('ToHour');
        }
        if (!attendance.date) {
            throw new NotEmptyField('Date');
        }
        if (!attendance.userId) {
            throw new NotEmptyField('UserId');
        }
        try {
            const user = await this._userService.getUsersByid(attendance.userId);
            if (user) {
                const createdAttendance = await this._attendanceRepository.cerateAttendance(attendance);
                this._rabbitService.sendMessage('stats', createdAttendance.userId);
                return createdAttendance;
            } else {
                throw new UserNotFoundError();
            }
        } catch (error: any) {
            throw error;
        }

    }

    async removeAttendance(id: string): Promise<Attendance> {
        try {
            const removedAttendance = await this._attendanceRepository.removeAttendance(id);
            if (!removedAttendance) {
                throw new AttendanceNotFoundError();
            }
            console.log(removedAttendance);
            this._rabbitService.sendMessage('stats', removedAttendance.userId);
            return removedAttendance;
        } catch (error: any) {
            throw error;
        }

    }

    async removeUserAttendances(userId: string): Promise<void> {
        try {
            this._attendanceRepository.removeUserAttendances(userId);
        } catch (error: any) {
            throw error;
        }
    }

}