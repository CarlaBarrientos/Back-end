import { inject, injectable } from "inversify";
import { TYPES } from "../../types";
import IUserRepository from "../repository-interfaces/iuser.repository";
import IUserService from "../service-interfaces/iuser.service";
import { UserMapper } from '../../infraestructure/userMapper';
import { UserDto } from "../../infraestructure/controllers/dtos/userDto";
import User from "../../domain/entities/user";
import IAttendanceService from "../service-interfaces/iattendance.service";
import { NotEmptyField, UserNotFoundError } from "../errors/errors";

@injectable()
export default class UserService implements IUserService {
    constructor(@inject(TYPES.IUserRepository) private readonly _userRepository: IUserRepository,
        @inject(TYPES.IAttendanceService) private readonly _attendanceService: IAttendanceService) { }

    async getUsers(id?: string, name?: string, nickname?: string): Promise<User[]> {
        try {
            const users = await this._userRepository.getUsers(id, name, nickname);
            if ((name || nickname || id) && users.length === 0) {
                throw new UserNotFoundError();
            }
            let newUsers = await Promise.all(users.map(async (user) => {
                const attendances = await this._attendanceService.getAttendancesByUser(user.id!);
                user.attendances = attendances;
                return user;
            }));
            return newUsers;
        } catch (error: any) {
            throw error;
        }
    }

    async createUser(user: UserDto): Promise<User> {
        if (!user.name) {
            throw new NotEmptyField('Name');
        }
        if (!user.lastname) {
            throw new NotEmptyField('Lastname');
        }
        if (!user.nickname) {
            throw new NotEmptyField('Nickname');
        }
        try {
            const createdUser = await this._userRepository.cerateUser(UserMapper.toUserFromDto(user));
            return createdUser;

        } catch (error: any) {
            throw error;
        }
    }

    async removeUser(id: string): Promise<User> {
        const user = await this._userRepository.getUsers(id);
        if(user.length === 0) {
            throw new UserNotFoundError();
        }
        const removedUser = await this._userRepository.removeUser(user[0]);
        await this._attendanceService.removeAttendances(id);

        return removedUser;
    }

    async updateAttendance(id: string, attendance: number): Promise<User> {
        const user = await this._userRepository.getUsers(id);
        if(user.length === 0) {
            throw new UserNotFoundError();
        }
        const updatedUser = await this._userRepository.updateAttendance(id, attendance);
        return updatedUser;
    }
}