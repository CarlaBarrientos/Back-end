export default interface Attendance {
    id: string;
    fromHour: string;
    toHour: string;
    date: Date;
    notes: string;
    userId: string;
}