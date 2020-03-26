import express, { Router } from 'express';
import { Request, Response } from 'express';

export let homeRouter = express.Router();

homeRouter.get('/', (req: Request, res: Response) => {
    res.send("Welcome to template app");
});