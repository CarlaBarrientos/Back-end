import axios from "axios";
import AttendanceService from "./attendance.service";


export default class UserService {
    attendanceService: AttendanceService;
    constructor() {
        this.attendanceService = new AttendanceService();
     }

    async updateAttendance(userId: string) {
        try {
            const attendances = await this.attendanceService.getAttendancesByUserId(userId)
            const user = await axios.put(`${process.env.USERS_API}/${userId}`, {
                attendance: attendances.data.length
            });
            return user;
        } catch(error: any) {
            throw error;
        }
        
    }
}