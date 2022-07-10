import { injectable } from 'inversify';
import IAttendanceRepository from '../../application/repository-interfaces/iattendance.repository';
import Attendance from '../../domain/entities/attendance';
import AttendanceEntity from '../database/entities/attendance.entity';
import mongoose from 'mongoose';
import { AttendanceMapper } from '../attendanceMapper';

@injectable()
export default class AttendanceRepository implements IAttendanceRepository {

    constructor() { }

    async getAttendances(userId?: string): Promise<Attendance[]> {
        if (userId) {
            const attendances = await AttendanceEntity.find({ userId: userId }).exec();
            return attendances.map((attendance) => {
                return AttendanceMapper.toAttendanceFromEntity(attendance);
            })
        } else {
            const attendances = await AttendanceEntity.find();
            return attendances.map((attendance) => {
                return AttendanceMapper.toAttendanceFromEntity(attendance);
            })
        }

    }

    async cerateAttendance(attendance: Attendance): Promise<Attendance> {
        const newAttendance = new AttendanceEntity({
            fromHour: attendance.fromHour,
            toHour: attendance.toHour,
            date: attendance.date,
            notes: attendance.notes,
            userId: attendance.userId
        });
        console.log(newAttendance);
        const savedAttendance = await newAttendance.save();
        return AttendanceMapper.toAttendanceFromEntity(savedAttendance);
    }

    async removeAttendance(id: string): Promise<Attendance> {
        const objectId = new mongoose.Types.ObjectId(id);
        return await AttendanceEntity
            .findByIdAndRemove(objectId)
            .lean();
    }

    async removeUserAttendances(userId: string): Promise<void> {
        await AttendanceEntity.deleteMany({
            userId: userId
        });
    }
}