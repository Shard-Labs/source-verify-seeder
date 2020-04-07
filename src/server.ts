import App from './app';

import dotenv from 'dotenv';

import { homeRouter } from './routes/homeRouter';
import { userRouter } from './routes/userRouter';
import bodyParser from 'body-parser';
import errorMiddleware from './middleware/errorMiddleware';
import { loggerMiddleware } from './middleware/logger';

dotenv.config();

import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./database/models/User";
import { UserSeed } from "./database/seeds/userSeed";
import { Request, Response } from 'express';

createConnection().then(async connection => {
    const appInstance: App = new App({
        port: parseInt(process.env.SERVER_PORT, 10)
    });
    appInstance.app.use(bodyParser.json());
    appInstance.app.use(bodyParser.urlencoded({ extended: true }));
    appInstance.app.use(loggerMiddleware);
    appInstance.app.use(errorMiddleware);
    appInstance.app.use('/', homeRouter);
    // tslint:disable-next-line:no-unused-expression
    new UserSeed();
    appInstance.app.use('/api/users', userRouter);
    
    appInstance.listen();
    // tslint:disable-next-line:no-console
    console.log("Inserting a new user into the database...");

    // tslint:disable-next-line:no-console
}).catch(error => console.log(error));


