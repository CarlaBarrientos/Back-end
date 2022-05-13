import "reflect-metadata";
import express from 'express';
import bodyParser from 'body-parser';
import GameService from "./core/service/game.service";
// import { DbConnection } from "./infraestructure/database/database";
// import './infraestructure/controllers/game.controller';
// import { InversifyExpressServer } from "inversify-express-utils";
// import { container } from './core/service/inversify';

const app = express();
//require("./infraestructure/database/database");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;
const service = new GameService();

app.get('/api/game', async (request, response) => {
    const newGame = await service.createGame();
    console.log('here');
    console.log(newGame);
    response.status(200).json(newGame);
});

app.post('/api/game/join', async (request, response) => {
  try {
    const newPlayer = request.body;
    const currentGame = await service.joinGame(newPlayer);
    response.status(200).json(currentGame.getPlayers());
  } catch(error) {
    response.status(400).json(error);
  }
  
});

app.get('/api/game/:id', async (request, response) => {
  const id = request.params.id;
  const currentGame = await service.getGame();
  console.log('here');
  console.log(currentGame);
  response.status(200).json(currentGame);
});

app.listen(port, () => console.log(`server listening on ${port}`));

// const app = express();
// // let dbConnection = new DbConnection();
// // dbConnection.connect();app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(bodyParser.json());

// const port = 3000;

// let server =  new InversifyExpressServer(container, null, {rootPath: '/api'}, app);
// server.setConfig((app) => {
//     app.use(bodyParser.urlencoded({
//       extended: true
//     }));
//     app.use(bodyParser.json());
//   });
// let appConfigured = server.build();
// appConfigured.listen(port || 3000, () => console.log(`App running on ${port}`));
