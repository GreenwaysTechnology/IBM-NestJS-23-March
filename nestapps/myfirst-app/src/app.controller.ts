import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}
  //apis
  // @Get() // http get method
  // public hello(): string {
  //   return 'Hello Nest App!'
  // }
  @Get()
  public hello(): string {
    return this.appService.sayHello();
  }
}
