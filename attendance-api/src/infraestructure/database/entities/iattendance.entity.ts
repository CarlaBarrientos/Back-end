import { Document, ObjectId } from "mongoose";

export interface IAttendance {
    _id?: ObjectId;
    fromHour: string;
    toHour: string;
    date: Date;
    notes: string;
    userId: string;
}