import { Request, Response, NextFunction } from 'express'

export const loggerMiddleware = (req: Request, resp: Response, next: NextFunction) => {
    // tslint:disable-next-line:no-console
    console.log('Request logged:', req.method, req.path)
    next()
}

