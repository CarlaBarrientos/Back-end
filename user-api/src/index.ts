import "reflect-metadata";
require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import './infraestructure/controllers/user.controller';
import { InversifyExpressServer } from "inversify-express-utils";
import { container } from './inversify';
import { errorHandler } from "./application/errors/error.handler";

const app = express();

const port = 3001;

let server = new InversifyExpressServer(container, null, { rootPath: '/api' }, app);
server.setConfig((app: express.Application) => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
});

server.setErrorConfig((app: express.Application) => {
  app.use(errorHandler);
});

let appConfigured = server.build();
appConfigured.listen(port || 3000, () => console.log(`App running on ${port}.`));

