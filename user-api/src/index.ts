import "reflect-metadata";
require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import './infraestructure/controllers/user.controller';
import { InversifyExpressServer } from "inversify-express-utils";
import { container } from './application/services/inversify';
import { errorHandler } from "./application/services/errors/error.handler";

const app = express();

const port = 3001;

let server =  new InversifyExpressServer(container, null, {rootPath: '/api'}, app);
server.setConfig((app:any) => {
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.use(bodyParser.json());
    app.use(errorHandler);
  });
let appConfigured = server.build();
appConfigured.listen(port || 3000, () => console.log(`App running on ${port}.`));

