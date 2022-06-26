import User from "../../domain/entities/user";

export default interface IUserService {
    cerateUser(user: User): Promise<User>;
}