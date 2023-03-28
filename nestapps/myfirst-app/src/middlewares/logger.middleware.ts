import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    //middleware logic : logging
    console.log(`URL => ${req.url}`);
    console.log(`Method=> ${req.method}`);
    console.log(`Date =>`, new Date().toISOString());
    //you must call next : function  moving to next middleware
    next();
  }
}
