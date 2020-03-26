import express from 'express';
import { Application } from "express";

export default class App {
    public app: Application;
    private port: number
    private database: any

    constructor(appInit: { port: number, database: any}) {
        this.app = express()
        this.port = appInit.port
        this.database = appInit.database
        this.database.sequelize.sync()
    }

    public listen(){
        this.app.listen(this.port, () => {
            // tslint:disable-next-line:no-console
            console.log(`server started at http://localhost:${this.port}`);
        })
    }
}
