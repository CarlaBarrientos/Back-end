import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "../../domain/types";
import IUserRepository from '../repository-interfaces/iuser.repository';
import UserRepository from '../../infraestructure/repository/user.repository';
import IUserService from '../service-interfaces/iuser.service';
import UserService from './user.service';

export const container = new Container();
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);
container.bind<IUserService>(TYPES.IUserService).to(UserService);