import { injectable } from "inversify";
import axios from "axios";
import IAttendanceService from "../service-interfaces/iattendance.service";
import Attendance from "../../domain/entities/attendance";

@injectable()
export default class AttendanceService implements IAttendanceService {
    constructor(){ }

    async getAttendancesByUser(userId: string): Promise<Attendance[]> {
        const attendances = await (await axios.get(`${process.env.ATTENDANCES_API}?userId=${userId}`)).data;
        return attendances;
    }

    async removeAttendances(userId: string): Promise<void> {
        const response = await axios.delete(`${process.env.ATTENDANCES_API}/users/${userId}`);
        if(response.status !== 204) {
            throw new Error();
        }
    }
}