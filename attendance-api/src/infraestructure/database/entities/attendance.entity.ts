import mongoose from 'mongoose';
import { IAttendance } from './iattendance.entity';
const Schema = mongoose.Schema;

const attendanceSchema = new Schema <IAttendance>({
    fromHour: {
        type: String
    },
    toHour: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    notes: {
        type: String
    },
    userId: {
        type: String
    }
});

const AttendanceEntity = mongoose.model<IAttendance>('AttendanceEntity', attendanceSchema);

export default AttendanceEntity;