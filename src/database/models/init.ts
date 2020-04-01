import { Sequelize, Dialect } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const sequelize: Sequelize = new Sequelize(process.env.DATABASE, process.env.DBUSER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT as Dialect
});

// This is used to test connection with database
sequelize
    .authenticate()
    .then(() => {
        // tslint:disable-next-line:no-console
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        // tslint:disable-next-line:no-console
        console.error('Unable to connect to the database:', err);
    });

import User from "./User";

export const db: any = {
    Sequelize,
    sequelize,
    users: User
};
