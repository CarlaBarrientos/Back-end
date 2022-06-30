import User from "../../domain/entities/user";
import { UserDto } from "../../infraestructure/controllers/dtos/userDto";

export default interface IUserService {
    getUsers(name?: string, nickname?: string): Promise<User[]>
    createUser(user: UserDto): Promise<User>;
    removeUser(id: string): Promise<User>;
}