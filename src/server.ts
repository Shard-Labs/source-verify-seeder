import App from './app';

import dotenv from 'dotenv';

import { homeRouter } from './routes/homeRouter';
import bodyParser from 'body-parser';
import errorMiddleware from './middleware/errorMiddleware';
import { loggerMiddleware } from './middleware/logger';


dotenv.config();

const appInstance: App = new App({
    port: parseInt(process.env.SERVER_PORT, 10)
});
appInstance.app.use(bodyParser.json());
appInstance.app.use(bodyParser.urlencoded({ extended: true }));
appInstance.app.use(loggerMiddleware);
appInstance.app.use(errorMiddleware);
appInstance.app.use('/', homeRouter);

// import {userRouter} from "./routes/userRoutes";
// appInstance.app.use('/api/users', userRouter);

import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";

createConnection().then(async connection => {
    // tslint:disable-next-line:no-console
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    // tslint:disable-next-line:no-console
    console.log("Saved a new user with id: " + user.id);
    // tslint:disable-next-line:no-console
    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    // tslint:disable-next-line:no-console
    console.log("Loaded users: ", users);
    // tslint:disable-next-line:no-console
    console.log("Here you can setup and run express/koa/any other framework.");
    // tslint:disable-next-line:no-console
}).catch(error => console.log(error));

appInstance.listen();