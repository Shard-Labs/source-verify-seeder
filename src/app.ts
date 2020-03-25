import express from 'express';
import { Application } from "express";

export default class App {
    public app: Application;
    public port: number
    public database: any

    constructor(appInit: { port: number; middleWares: any; controllers: any , database: any}) {
        this.app = express()
        this.port = appInit.port
        this.routes(appInit.controllers)
        this.middlewares(appInit.middleWares)
        this.database = appInit.database
        this.database.sequelize.sync()
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare)
        })
    }

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router)
        })
    }

    public listen(){
        this.app.listen(this.port, () => {
            // tslint:disable-next-line:no-console
            console.log(`server started at http://localhost:${this.port}`);
        })
    }
}
