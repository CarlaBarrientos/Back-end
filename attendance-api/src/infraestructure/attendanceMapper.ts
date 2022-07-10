import { AttendanceDto } from './controllers/dtos/attendanceDto';
import { IAttendance } from './database/entities/iattendance.entity';
import Attendance from '../domain/entities/attendance';
import AttendanceEntity from './database/entities/attendance.entity';
export class AttendanceMapper {
    static toAttendanceFromEntity(attendanceEntity: IAttendance): Attendance {
        const attendance = new Attendance(attendanceEntity.fromHour, attendanceEntity.toHour, attendanceEntity.date, attendanceEntity.notes, attendanceEntity.userId, attendanceEntity._id?.toString());
        return attendance;
    }

    static toAttendanceFromDto(attendanceDto: AttendanceDto): Attendance {
        const attendance = new Attendance(attendanceDto.fromHour, attendanceDto.toHour, attendanceDto.date, attendanceDto.notes, attendanceDto.userId, attendanceDto._id);
        return attendance;
    }

    static toDtoFromAttendance(attendance: Attendance): AttendanceDto {
        const attendanceDto = new AttendanceDto();
        attendanceDto._id = attendance.id!;
        attendanceDto.fromHour = attendance.fromHour;
        attendanceDto.toHour = attendance.toHour;
        attendanceDto.date = attendance.date;
        attendanceDto.notes = attendance.notes;
        attendanceDto.userId = attendance.userId;
        return attendanceDto;
    }
}