import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from '../entities/types';
import IGameRepository from '../repository-interface/igame.repository';
import GameRepository from "../../infraestructure/repository-implementation/game.repository";

export const container = new Container();
container.bind<IGameRepository>(TYPES.IGameRepository).to(GameRepository);