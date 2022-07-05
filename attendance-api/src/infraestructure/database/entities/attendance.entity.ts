// import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";

// @Entity()
// export class AttendanceEntity {
//     @ObjectIdColumn()
//     _id?: string

//     @Column()
//     fromHour!: string

//     @Column()
//     toHour!: string

//     @Column()
//     date!: Date

//     @Column()
//     notes: string

//     @Column()
//     userId: string
// }

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