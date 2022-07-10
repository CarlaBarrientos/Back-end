import { injectable } from 'inversify';
import IUserRepository from '../../application/repository-interfaces/iuser.repository';
import { UserEntity } from '../database/entities/user.entity';
import { AppDataSource } from '../database/data-source';
import User from '../../domain/entities/user';
import { Repository } from 'typeorm';
import { UserMapper } from '../userMapper';

@injectable()
export default class UserRepository implements IUserRepository {

    private userRepository: Repository<UserEntity>;

    constructor() {
        this.userRepository = AppDataSource.getRepository(UserEntity);
    }

    async getUsers(id?: string, name?: string, nickname?: string): Promise<User[]> {
        let users;
        if(name || nickname || id) {
            users = await this.userRepository.find({ 
                where: [ 
                    {name: name}, 
                    {nickname: nickname}, 
                    {id: id}
                ]
            });
        } else {
            users = await this.userRepository.find();
        }
        return users.map((user) => {
            return UserMapper.toUserFromEntity(user)
        });
    }

    async cerateUser(user: User): Promise<User> {
        const userSaved = await this.userRepository.save(UserMapper.toUserEntity(user));
        return UserMapper.toUserFromEntity(userSaved);
    }

    async removeUser(userEntity: User): Promise<User> {
        const deletedUser = await this.userRepository.remove(UserMapper.toUserEntity(userEntity));
        return UserMapper.toUserFromEntity(deletedUser);
    }

    async updateAttendance(userId: string, attendance: number): Promise<User> {
        const result = await this.userRepository.update(userId, { attendance: attendance });

        if (result.affected! > 0) {
            const userEntity = await this.userRepository.findOne({ where: { id: userId } });
            return UserMapper.toUserFromEntity(userEntity!);
        } else {
            throw new Error('Can not update User.')
        }
    }
}