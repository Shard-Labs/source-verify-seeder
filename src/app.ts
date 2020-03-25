import express from 'express';
import { Application } from "express";

export default class App {
    public instance: Application;
    private port: number
    private database: any

    constructor(appInit: { port: number, database: any}) {
        this.instance = express()
        this.port = appInit.port
        this.database = appInit.database
        this.database.sequelize.sync()
    }

    public listen(){
        this.instance.listen(this.port, () => {
            // tslint:disable-next-line:no-console
            console.log(`server started at http://localhost:${this.port}`);
        })
    }
}
