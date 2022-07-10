import User from "../../domain/entities/user";

export default interface IUserService {
    getUsers(id?: string, name?: string, nickname?: string): Promise<User[]>
    createUser(user: User): Promise<User>;
    removeUser(id: string): Promise<User>;
    updateAttendance(id: string, attendance: number): Promise<User>
}