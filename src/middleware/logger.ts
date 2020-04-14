import { Request, Response, NextFunction } from 'express';
import { logger } from '../logger/winston';

export const loggerMiddleware = (req: Request, resp: Response, next: NextFunction) => {
    logger.info('Request logged: ' + req.method + ' ' + req.path);
    next();
}

