import { UpdateResult } from "typeorm";
import User from "../../domain/entities/user";
import { UserEntity } from '../../infraestructure/database/entities/user.entity';

export default interface IUserRepository {
    getUsers(name?: string, nickname?: string, id?: string): Promise<UserEntity[]>;
    cerateUser(user: User): Promise<UserEntity>;
    removeUser(id: string): Promise<UserEntity>;
    updateAttendance(id: string, attendance: number): Promise<UserEntity>;
}