import User from "../../domain/entities/user";

export default interface IUserService {
    getUsersByid(userId: string): Promise<User[]>;
}