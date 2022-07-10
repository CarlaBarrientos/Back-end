import User from "../../domain/entities/user";

export default interface IUserRepository {
    getUsers(id?: string, name?: string, nickname?: string): Promise<User[]>;
    cerateUser(user: User): Promise<User>;
    removeUser(user: User): Promise<User>;
    updateAttendance(id: string, attendance: number): Promise<User>;
}