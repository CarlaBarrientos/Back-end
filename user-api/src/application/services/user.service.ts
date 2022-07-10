import { inject, injectable } from "inversify";
import { TYPES } from "../../types";
import IUserRepository from "../repository-interfaces/iuser.repository";
import IUserService from "../service-interfaces/iuser.service";
import { UserMapper } from '../../infraestructure/userMapper';
import { UserDto } from "../../infraestructure/controllers/dtos/userDto";
import User from "../../domain/entities/user";
import axios from "axios";

@injectable()
export default class UserService implements IUserService {
    constructor(@inject(TYPES.IUserRepository) private readonly _userRepository: IUserRepository){ }

    async getUsers(name?: string, nickname?: string, id?: string): Promise<User[]> {
        const users = await this._userRepository.getUsers(name, nickname, id);
        let newUsers = await Promise.all( users.map(async (user) => {
            const attendances = await (await axios.get(`${process.env.ATTENDANCES_API}?userId=${user.id}`)).data;
            return UserMapper.toUserFromEntity(user, attendances);
        }));
        return newUsers;
    }

    async createUser(user: UserDto): Promise<User> {
        const createdUser = await this._userRepository.cerateUser(UserMapper.toUserFromDto(user));
        return UserMapper.toUserFromEntity(createdUser);
    }

    async removeUser(id: string): Promise<User> {
        await axios.delete(`${process.env.ATTENDANCES_API}/users/${id}`);
        const removedUser = await this._userRepository.removeUser(id);
        
        return UserMapper.toUserFromEntity(removedUser);
    }

    async updateAttendance(id: string, attendance: number): Promise<User> {
        const updatedUser = await this._userRepository.updateAttendance(id, attendance);
        return UserMapper.toUserFromEntity(updatedUser);
    }
}