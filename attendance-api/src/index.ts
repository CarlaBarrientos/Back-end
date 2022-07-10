import "reflect-metadata";
require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import './infraestructure/controllers/attendance.controller';
import { InversifyExpressServer } from "inversify-express-utils";
import { container } from './inversify';
import { DbConnection } from "./infraestructure/database/database";
import { errorHandler } from "./application/errors/error.handler";

const app = express();
const port = 3000;

let dbConnection = new DbConnection();
dbConnection.connect();

let server = new InversifyExpressServer(container, null, { rootPath: '/api' }, app);
server.setConfig((app: any) => {
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

