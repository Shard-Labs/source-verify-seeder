import { UserController } from "../controllers/userController";
import { Router, Request, Response, NextFunction } from 'express';
import { performance } from "perf_hooks";
import { User } from "../database/models/User";
import { UpdateResult } from "typeorm";

export let userRouter: Router = Router();

const userController: UserController = new UserController();

userRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const start: number = performance.now();
    const result: Array<User> = await userController.getAll();
    const time: number = performance.now() - start;
    res.status(200).json({
        result,
        time
    })
});

userRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    const start: number = performance.now();
    const result: User = await userController.getByID(parseInt(req.params.id));
    const time: number = performance.now() - start;
    res.status(200).json({
        result,
        time
    })
});

userRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
    const start: number = performance.now();
    const result: User = await userController.create(req.body);
    const time: number = performance.now() - start;
    res.status(200).json({
        result,
        time
    })
});

userRouter.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    const start: number = performance.now();
    const result: UpdateResult = await userController.update(parseInt(req.params.id), req.body);
    const time: number = performance.now() - start;
    res.status(200).json({
        result,
        time
    })
});

userRouter.delete('/:id', async (req: Request, res: Response, next) => {
    const start: number = performance.now();
    const result: void = await userController.delete(parseInt(req.params.id));
    const time: number = performance.now() - start;
    res.status(200).json({
        result,
        time
    })
});