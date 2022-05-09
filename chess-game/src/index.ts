import "reflect-metadata";
import express from 'express';
import bodyParser from 'body-parser';
import Game from './core/entities/game';
import Board from './core/entities/board';
import GameService from './core/service/game-service';
import GameRepository from "./infraestructure/repository-implementation/game-repository";

const app = express();
//require("./infraestructure/database/database");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;

app.get('/', async (request, response) => {
    let service = new GameService(new GameRepository);
    const newGame = await service.createGame();
    console.log('here');
    console.log(newGame);
    response.send(newGame);
});

app.listen(port, () => console.log(`server listening on ${port}`));