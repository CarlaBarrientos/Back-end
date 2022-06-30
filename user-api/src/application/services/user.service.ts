import { inject, injectable } from "inversify";
import { TYPES } from "../../domain/types";
import IUserRepository from "../repository-interfaces/iuser.repository";
import IUserService from "../service-interfaces/iuser.service";
import { UserMapper } from '../../domain/userMapper';
import { UserDto } from "../../infraestructure/controllers/dtos/userDto";
import User from "../../domain/entities/user";

@injectable()
export default class UserService implements IUserService {
    constructor(@inject(TYPES.IUserRepository) private readonly _userRepository: IUserRepository){}

    async getUsers(name?: string, nickname?: string): Promise<User[]> {
        const users = await this._userRepository.getUsers(name, nickname);
        return users.map((user) => UserMapper.toUserFromEntity(user));
    }

    async createUser(user: UserDto): Promise<User> {
        const createdUser = await this._userRepository.cerateUser(UserMapper.toUserFromDto(user));
        return UserMapper.toUserFromEntity(createdUser);
    }

    async removeUser(id: string): Promise<User> {
        const removedUser = await this._userRepository.removeUser(id);
        return UserMapper.toUserFromEntity(removedUser);
    }
}