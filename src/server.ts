import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import 'reflect-metadata';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

const instance = express();
instance.use(cors());
instance.use(bodyParser.json());
instance.use(bodyParser.urlencoded({ extended: true }));
instance.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
instance.use('/ccs/images', express.static('images'));

const app = NestFactory.create(ApplicationModule, instance);
app.listen(8090, () => console.log('Application is listening on port 8090'));
