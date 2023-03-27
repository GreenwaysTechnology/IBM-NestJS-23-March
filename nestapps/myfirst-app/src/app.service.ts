import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}
  //biz logic
  public sayHello(): string {
    return 'Hello Nest App!!';
  }
}
