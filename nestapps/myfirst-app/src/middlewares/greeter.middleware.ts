import { Request, Response, NextFunction } from 'express';

export function greeter(req:Request,res:Response,next:NextFunction){
    console.log('......Welcome........')
    next()
  }
  