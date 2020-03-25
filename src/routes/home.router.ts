import express from 'express'
import { Request, Response } from 'express'

export default class HomeRoute {
    public path = '/'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get('/', (req: Request, res: Response) => {
            res.send("Welcome to template app");
        })
    }
}