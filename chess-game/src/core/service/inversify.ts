import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from '../entities/types';
import GameRepository from '../../infraestructure/repository-implementation/repository';
import IGameRepository from '../repository-interface/igame-repository';

export const container = new Container();
container.bind<IGameRepository>(TYPES.IGameRepository).to(GameRepository);