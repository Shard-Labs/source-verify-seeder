import express, { Router } from 'express'
import { Request, Response } from 'express'

export default class HomeRoute {
    public path: string = '/'
    public router: Router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get('/', (req: Request, res: Response) => {
            res.send("Welcome to template app");
        })
    }
}