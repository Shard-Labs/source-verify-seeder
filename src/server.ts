import App from './app'

import dotenv from 'dotenv'

import HomeRoute from './routes/homeRouter'
import bodyParser from 'body-parser'
import errorMiddleware from './middleware/errorMiddleware'
import {loggerMiddleware} from './middleware/logger'
import {db} from "./models/init";

dotenv.config()

const app: any = new App({
    port: parseInt(process.env.SERVER_PORT, 10),
    database: db
})
app.instance.use(bodyParser.json())
app.instance.use(bodyParser.urlencoded({extended: true}))
app.instance.use(loggerMiddleware)
app.instance.use(errorMiddleware)
app.instance.use('/', new HomeRoute().router)

app.listen()