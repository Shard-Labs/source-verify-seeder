import App from './app'

import dotenv from 'dotenv'

import HomeRoute from './routes/home.router'
import bodyParser from 'body-parser'
import errorMiddleware from './middleware/errorMiddleware'
import {loggerMiddleware} from './middleware/logger'
import {db} from "./models/init";

dotenv.config()

const app: App = new App({
    port: parseInt(process.env.SERVER_PORT, 10),
    controllers: [
        new HomeRoute()
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({extended: true}),
        loggerMiddleware,
        errorMiddleware
    ],
    database: db
})

app.listen()