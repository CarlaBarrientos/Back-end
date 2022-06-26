import { inject, injectable } from "inversify";
import user from "../../domain/entities/user";
import { TYPES } from "../../domain/types";
import IUserRepository from "../repository-interfaces/iuser.repository";
import IUserService from "../service-interfaces/iuser.service";
import { UserMapper } from '../../domain/userMapper';

@injectable()
export default class UserService implements IUserService {
    constructor(@inject(TYPES.IUserRepository) private readonly _userRepository: IUserRepository){}
    async cerateUser(user: user): Promise<user> {
        const createdUser = await this._userRepository.cerateUser(UserMapper.toUserEntity(user));
        return UserMapper.toUser(createdUser);
    }
}