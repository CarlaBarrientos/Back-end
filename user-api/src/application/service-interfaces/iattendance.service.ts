import Attendance from "../../domain/entities/attendance";

export default interface IAttendanceService {
    getAttendancesByUser(userId: string): Promise<Attendance[]>;
    removeAttendances(userId: string): Promise<void>;
}