import { injectable } from 'inversify';
import IUserRepository from '../../application/repository-interfaces/iuser.repository';
import { UserEntity } from '../database/entities/user.entity';
import { AppDataSource } from '../database/data-source';
import User from '../../domain/entities/user';
import { UserMapper } from '../../domain/userMapper';

@injectable()
export default class UserRepository implements IUserRepository {

    async cerateUser(user: UserEntity): Promise<UserEntity> {
        const userRepository = AppDataSource.getRepository(UserEntity);
        const userCreated = await userRepository.save(user);
        return userCreated;
    }
    
}