import Attendance from "../../../domain/entities/attendance";

export class UserDto {
    id?: string;
    name: string; 
    lastname: string; 
    nickname: string;
    attendance?: number;
    attendances?: Attendance[];
}