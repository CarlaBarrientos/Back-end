import { UserDto } from '../infraestructure/controllers/dtos/userDto';
import { UserEntity } from '../infraestructure/database/entities/user.entity';
import User from './entities/user';
export class UserMapper {
    static toUserFromEntity(userEntity: UserEntity): User {
        const user = new User(userEntity.name, userEntity.lastname, userEntity.nickname, userEntity.attendance, userEntity.id);
        return user;
    }

    static toUserFromDto(userDto: UserDto): User {
        const user = new User(userDto.name, userDto.lastname, userDto.nickname, userDto.attendance, userDto.id);
        return user;
    }

    static toUserEntity(user: User): UserEntity {
        return {
            name: user.name,
            lastname: user.lastname,
            nickname: user.nickname,
            attendance: user.attendance!
        }
    }

    static toDtoFromUser(user: User): UserDto {
        const userDto = new UserDto();
        userDto.id = user.id!;
        userDto.name = user.name;
        userDto.lastname = user.lastname;
        userDto.nickname = user.nickname;
        userDto.attendance = user.attendance;
        return userDto;
    }
}