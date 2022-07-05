import { AttendanceDto } from '../infraestructure/controllers/dtos/attendanceDto';
import { IAttendance } from '../infraestructure/database/entities/iattendance.entity';
import Attendance from './entities/attendance';
export class AttendanceMapper {
    static toAttendanceFromEntity(attendanceEntity: IAttendance): Attendance {
        const attendance = new Attendance(attendanceEntity.fromHour, attendanceEntity.toHour, attendanceEntity.date, attendanceEntity.notes, attendanceEntity.userId, attendanceEntity._id?.toString());
        return attendance;
    }

    static toAttendanceFromDto(attendanceDto: AttendanceDto): Attendance {
        const attendance = new Attendance(attendanceDto.fromHour, attendanceDto.toHour, attendanceDto.date, attendanceDto.notes, attendanceDto.userId, attendanceDto._id);
        return attendance;
    }

    static toAttendanceEntity(attendance: Attendance): IAttendance {
        return {
            fromHour: attendance.fromHour,
            toHour: attendance.toHour,
            date: attendance.date,
            notes: attendance.notes,
            userId: attendance.userId
        }
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