import User from "../../domain/entities/user";
import { UserEntity } from '../../infraestructure/database/entities/user.entity';

export default interface IUserRepository {
    cerateUser(user: UserEntity): Promise<UserEntity>;
}