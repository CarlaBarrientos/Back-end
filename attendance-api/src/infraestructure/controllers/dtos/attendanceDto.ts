export class AttendanceDto {
    _id?: string;
    fromHour: string; 
    toHour: string; 
    date: Date;
    notes: string;
    userId: string;
}