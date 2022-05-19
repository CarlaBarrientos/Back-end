import { Request, Response, NextFunction } from 'express';
import { BaseError } from './errors';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log('Error handling middleware called.');
  console.error('Error occured:', err);
  if (err instanceof BaseError) {
    console.log('Error is known.');
    res.status(err.httpCode).send(err);
  } else {
    res.status(500).send({message: 'Unknown error.'});
  }
};