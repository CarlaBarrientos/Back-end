import Attendance from "../../domain/entities/attendance";

export default interface IAttendanceRepository {
    getAttendances(userId?: string): Promise<Attendance[]>;
    cerateAttendance(attendate: Attendance): Promise<Attendance>;
    removeAttendance(id: string): Promise<Attendance>;
    removeUserAttendances(userId: string): Promise<void>;
}