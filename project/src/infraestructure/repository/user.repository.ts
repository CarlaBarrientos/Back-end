import { injectable } from 'inversify';
import IUserRepository from '../../application/repository-interfaces/iuser.repository';
import { UserEntity } from '../database/entities/user.entity';
import { AppDataSource } from '../database/data-source';
import User from '../../domain/entities/user';
import { Repository } from 'typeorm';
import { UserMapper } from '../../domain/userMapper';
import { UserNotFoundError, UserNotValid } from '../../application/services/errors/errors';

@injectable()
export default class UserRepository implements IUserRepository {

    private userRepository: Repository<UserEntity>;

    constructor() {
        this.userRepository = AppDataSource.getRepository(UserEntity);
    }

    async getUsers(name?: string, nickname?: string): Promise<UserEntity[]> {
        return await this.userRepository.find({ where: { name: name, nickname: nickname } });
    }
    
    async cerateUser(user: User): Promise<UserEntity> {
        if(user.lastname && user.name && user.nickname) {
            const userSaved = await this.userRepository.save(UserMapper.toUserEntity(user));
            return userSaved;
        } else {
            throw new UserNotValid();
        }
        
    }

    async removeUser(ids: string): Promise<UserEntity> {
        const userEntity = await this.userRepository.findOne({ where:{ id: ids }});
        if(!userEntity) {
            throw new UserNotFoundError();
        } else {
            return await this.userRepository.remove(userEntity);
        }
    }
}