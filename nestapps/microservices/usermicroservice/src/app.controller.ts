import { Controller, Get } from '@nestjs/common';
import { MessagePattern, EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @MessagePattern({ cmd: 'process' })
  public getData(data: any) {
    console.log(data);
    return data;
  }
  @EventPattern('user_created')
  public onUserCreated(user: any) {
    //process the events
    console.log(user)
  }
}
