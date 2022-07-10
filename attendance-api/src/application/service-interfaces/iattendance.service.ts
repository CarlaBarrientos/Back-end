import Attendance from "../../domain/entities/attendance";

export default interface IAttendanceService {
    getAttendances(userId?: string): Promise<Attendance[]>
    createAttendance(attendance: Attendance): Promise<Attendance>;
    removeAttendance(id: string): Promise<Attendance>;
    removeUserAttendances(userId: string): void;
}