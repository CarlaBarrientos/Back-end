import Attendance from "../../domain/entities/attendance";
import { AttendanceDto } from "../../infraestructure/controllers/dtos/attendanceDto";

export default interface IAttendanceService {
    getAttendances(name?: string, nickname?: string): Promise<Attendance[]>
    createAttendance(attendance: AttendanceDto): Promise<Attendance>;
    removeAttendance(id: string): Promise<Attendance>;
}