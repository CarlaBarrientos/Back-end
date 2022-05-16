import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from '../entities/types';
import IGameRepository from '../repository-interface/igame.repository';
import GameRepository from "../../infraestructure/repository-implementation/game.repository";
import { IGameService } from '../service-interface/igame.service';
import GameService from './game.service';

export const container = new Container();
container.bind<IGameRepository>(TYPES.IGameRepository).to(GameRepository);
container.bind<IGameService>(TYPES.IGameService).to(GameService);