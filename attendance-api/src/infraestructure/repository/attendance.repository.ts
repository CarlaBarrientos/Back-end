import { injectable } from 'inversify';
import IAttendanceRepository from '../../application/repository-interfaces/iattendance.repository';
import Attendance from '../../domain/entities/attendance';
import { AttendanceNotFoundError, AttendanceNotValid } from '../../application/services/errors/errors';
import AttendanceEntity from '../database/entities/attendance.entity';
import { IAttendance } from '../database/entities/iattendance.entity';
import mongoose from 'mongoose';

@injectable()
export default class AttendanceRepository implements IAttendanceRepository {

    constructor() { }

    async getAttendances(userId?: string): Promise<IAttendance[]> {
        if(userId) {
            return await AttendanceEntity.find({userId: userId}).exec();            
        } else {
            return await AttendanceEntity.find();
        }
        
    }

    async cerateAttendance(attendance: Attendance): Promise<IAttendance> {
        if(attendance.toHour && attendance.fromHour && attendance.date && attendance.userId) {
            const newAttendance = new AttendanceEntity({
                fromHour: attendance.fromHour,
                toHour: attendance.toHour,
                date: attendance.date,
                notes: attendance.notes,
                userId: attendance.userId
            });
            return await newAttendance.save();
        } else {
            throw new AttendanceNotValid();
        }

    }

    async removeAttendance(id: string): Promise<IAttendance> {
        const objectId = new mongoose.Types.ObjectId(id);
        const attendanceEntity = await AttendanceEntity.findById(objectId).lean();
        if(!attendanceEntity) {
            throw new AttendanceNotFoundError();
        } else {
            return await AttendanceEntity
            .findByIdAndRemove(objectId)
            .lean();
        }
    }

    async removeUserAttendances(userId: string) {
        //const attendances = await AttendanceEntity.find({userId: userId}).exec();            

        try {
            await AttendanceEntity.deleteMany({
                userId: userId
            });
        } catch(error) {
            throw error;
        }
        
    }
}