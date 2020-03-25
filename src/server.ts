import App from './app'

import HomeRoute from './routes/home.router'
import bodyParser from 'body-parser'
import errorMiddleware from './middleware/errorMiddleware'
import {loggerMiddleware} from './middleware/logger'
import {db} from "./models/init";

const app = new App({
    port: 8080,
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