import Attendance from "../../domain/entities/attendance";
import AttendanceEntity from "../../infraestructure/database/entities/attendance.entity";
import { IAttendance } from "../../infraestructure/database/entities/iattendance.entity";

export default interface IAttendanceRepository {
    getAttendances(userId?: string): Promise<IAttendance[]>;
    cerateAttendance(attendate: Attendance): Promise<IAttendance>;
    removeAttendance(id: string): Promise<IAttendance>;
}