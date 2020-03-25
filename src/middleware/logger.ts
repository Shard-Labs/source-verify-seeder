import { Request, Response } from 'express'

export const loggerMiddleware = (req: Request, resp: Response, next: any) => {
    // tslint:disable-next-line:no-console
    console.log('Request logged:', req.method, req.path)
    next()
}

