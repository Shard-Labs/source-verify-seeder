import { Sequelize } from "sequelize";

const sequelize: Sequelize = new Sequelize('database', 'postgres', 'password', {
    host: process.env.HOST,
    dialect: "postgres"
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

export const db: any = {
    Sequelize,
    sequelize,
    table: require("./User.js")(sequelize, Sequelize)
};
