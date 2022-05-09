import "reflect-metadata";
import express from 'express';
import bodyParser from 'body-parser';
import { DbConnection } from "./infraestructure/database/database";
import './infraestructure/controllers/game.controller';
import { InversifyExpressServer } from "inversify-express-utils";
import { container } from './core/service/inversify';

const app = express();
// let dbConnection = new DbConnection();
// dbConnection.connect();app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

const port = 3000;

let server =  new InversifyExpressServer(container, null, {rootPath: '/api'}, app);
server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.use(bodyParser.json());
  });
let appConfigured = server.build();
appConfigured.listen(port || 3000, () => console.log(`App running on ${port}`));
