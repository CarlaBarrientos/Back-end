import axios from "axios";

export default class AttendanceService {

    constructor() { }

    async getAttendancesByUserId(userId: string) {
        try {
            const attendances = await (await axios.get(`${process.env.ATTENDANCES_API}?userId=${userId}`)).data;
            return attendances;
        } catch (error: any) {
            throw error;
        }
    }

}