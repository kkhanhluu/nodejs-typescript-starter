import { NextFunction, Request, Response, Router } from 'express';

export const healthRouter = Router();

healthRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send(`Everything OK! Running in ${process.env.NODE_ENV}`);
  next();
});
