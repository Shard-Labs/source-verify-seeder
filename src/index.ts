import express from "express";
import dotenv from "dotenv";
const app = express();

dotenv.config();

const port = process.env.SERVER_PORT; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});

import errorMiddleware from "./middleware/errorMiddleware";
app.use(errorMiddleware);

// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});