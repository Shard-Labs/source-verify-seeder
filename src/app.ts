import express from 'express';
import { Application } from "express";

interface AppConf {
    port: number
};

export default class App {
    public app: Application;
    private port: number;
    private database: any;

    constructor(appInit: AppConf) {
        this.app = express();
        this.port = appInit.port;
    }

    public listen(){
        this.app.listen(this.port, () => {
            // tslint:disable-next-line:no-console
            console.log(`server started at http://localhost:${this.port}`);
        });
    }
}
