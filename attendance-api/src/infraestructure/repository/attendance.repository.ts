import { injectable } from 'inversify';
import IAttendanceRepository from '../../application/repository-interfaces/iattendance.repository';
import { AttendanceEntity } from '../database/entities/attendance.entity';
import { AppDataSource } from '../database/database';
import Attendance from '../../domain/entities/attendance';
import { AttendanceMapper } from '../../domain/attendanceMapper';
import { AttendanceNotFoundError, AttendanceNotValid } from '../../application/services/errors/errors';
import { Repository } from 'typeorm';

@injectable()
export default class AttendanceRepository implements IAttendanceRepository {

    private attendanceRepository: Repository<AttendanceEntity>;

    constructor() {
        this.attendanceRepository = AppDataSource.getRepository(AttendanceEntity);
    }

    async getAttendances(): Promise<AttendanceEntity[]> {
        return await this.attendanceRepository.find();
    }
    
    async cerateAttendance(attendance: Attendance): Promise<AttendanceEntity> {
        if(attendance.toHour && attendance.fromHour && attendance.date && attendance.userId) {
            const attendanceSaved = await this.attendanceRepository.save(AttendanceMapper.toAttendanceEntity(attendance));
            return attendanceSaved;
        } else {
            throw new AttendanceNotValid();
        }
        
    }

    async removeAttendance(ids: string): Promise<AttendanceEntity> {
        // const attendanceEntity = await this.attendanceRepository.findOne({ where:{ id: ids }});
        // if(!attendanceEntity) {
        //     throw new AttendanceNotFoundError();
        // } else {
        //     return await this.attendanceRepository.remove(attendanceEntity);
        // }
        return new Promise<AttendanceEntity>(yes=>{});
    }
}