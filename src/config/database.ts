// tslint:disable-next-line:no-var-requires
require('dotenv').config()

module.exports = {
    "development": {
        database: process.env.DATABASE,
        dialect: process.env.DIALECT,
        username: process.env.DBUSER,
        password: process.env.PASSWORD,
        host: process.env.HOST
    },
    "test": {
        username: "root",
        password: null,
        database: "database_test",
        host: "127.0.0.1",
        dialect: "mysql"
    },
    "production": {
        username: "root",
        password: null,
        database: "database_production",
        host: "127.0.0.1",
        dialect: "mysql"
    }
}

