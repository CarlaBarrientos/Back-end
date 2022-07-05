import { inject, injectable } from "inversify";
import { TYPES } from "../../domain/types";
import IUserRepository from "../repository-interfaces/iuser.repository";
import IUserService from "../service-interfaces/iuser.service";
import { UserMapper } from '../../domain/userMapper';
import { UserDto } from "../../infraestructure/controllers/dtos/userDto";
import User from "../../domain/entities/user";
import axios from "axios";
import Attendance from "../../domain/entities/attendance";

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
        // if(attendances.length > 0) {
        //     attendances.forEach(async (attendance: Attendance) => {
        //         console.log(attendance);
        //         const response  = await (await axios.delete(`${process.env.ATTENDANCES_API}/${attendance._id}`)).data;
        //         console.log(response);
        //     });
        // }
        const removedUser = await this._userRepository.removeUser(id);
        
        return UserMapper.toUserFromEntity(removedUser);
    }
}