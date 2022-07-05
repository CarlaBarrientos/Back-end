export default interface Attendance {
    _id: string;
    fromHour: string;
    toHour: string;
    date: Date;
    notes: string;
    userId: string;
}