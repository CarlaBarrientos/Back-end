import { injectable } from "inversify";
import axios from "axios";
import IUserService from "../service-interfaces/iuser.service";
import User from "../../domain/entities/user";

@injectable()
export default class UserService implements IUserService {
    constructor(){ }

    async getUsersByid(userId: string): Promise<User[]> {
        const users = await (await axios.get(`${process.env.USERS_API}?id=${userId}`)).data;
        return users;
    }

}