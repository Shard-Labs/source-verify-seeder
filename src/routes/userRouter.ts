import { UserController } from "../controllers/userController";
import { Router, Request, Response } from 'express';
import { performance } from "perf_hooks";

export let userRouter = Router();

const userController = new UserController();

userRouter.get('/', async (req, res, next) => {
    const start = performance.now();
    const result = await userController.getAll();
    const time = performance.now() - start;
    res.status(200).json({
        result,
        time
    })
});

userRouter.get('/:id', async (req: Request, res: Response, next) => {
    const start = performance.now();
    const result = await userController.getByID(req.params.id);
    const time = performance.now() - start;
    res.status(200).json({
        result,
        time
    })
});

userRouter.post('/', async (req: Request, res: Response, next) => {
    const start = performance.now();
    const result = await userController.create(req.body);
    const time = performance.now() - start;
    res.status(200).json({
        result,
        time
    })
});

userRouter.put('/', async (req: Request, res: Response, next) => {
    const start = performance.now();
    const result = await userController.update(req.params.id, req.body);
    const time = performance.now() - start;
    res.status(200).json({
        result,
        time
    })
});

userRouter.delete('/:id', async (req: Request, res: Response, next) => {
    const start = performance.now();
    const result = await userController.delete(req.params.id);
    const time = performance.now() - start;
    res.status(200).json({
        result,
        time
    })
});