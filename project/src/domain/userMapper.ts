import { UserEntity } from '../infraestructure/database/entities/user.entity';
import User from './entities/user';
export class UserMapper {
    static toUser(userEntity: UserEntity): User {
        const user = new User(userEntity.id, userEntity.name, userEntity.lastname, userEntity.nickname);
        return user;
    }

    static toUserEntity(user: User): UserEntity {
        return {
            id: user.id,
            name: user.name,
            lastname: user.lastname,
            nickname: user.nickname
        }
    }
}