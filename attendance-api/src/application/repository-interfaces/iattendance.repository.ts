import Attendance from "../../domain/entities/attendance";
import { AttendanceEntity } from '../../infraestructure/database/entities/attendance.entity';

export default interface IAttendanceRepository {
    getAttendances(name?: string, nickname?: string): Promise<AttendanceEntity[]>;
    cerateAttendance(attendate: Attendance): Promise<AttendanceEntity>;
    removeAttendance(id: string): Promise<AttendanceEntity>;
}