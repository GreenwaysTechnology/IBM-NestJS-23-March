import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(@Inject('USERSERVICE') private readonly client: ClientProxy) {}

  @Get()
  getHello(): string {
    return 'Hello';
  }
  //event based
  @Post()
  createUser(@Body() createUserRequest: any) {
    // console.log(createUserRequest);
    this.client.emit('user_created', createUserRequest);
    return createUserRequest;
  }

  @Get("message")
  accumulate(): Observable<number> {
    const pattern = { cmd: 'process' };
    const payload = [1, 2, 3];
    return this.client.send<number>(pattern, payload);
  }
}