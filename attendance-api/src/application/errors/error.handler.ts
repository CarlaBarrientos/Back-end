import { Request, Response, NextFunction } from 'express';
import { BaseError } from './errors';

export const errorHandler = (err: Error , req: Request, res: Response, next: NextFunction) => {
  if (err instanceof BaseError) {
    res.status(err.httpCode).send({message: err.message});
  } else {
    res.status(500).send({message: 'Unknown error. Internal server error.'});
  }
};