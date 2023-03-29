import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config/dist';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) { }
  getHello(): string {
    return this.configService.get<string>('WELCOME_MESSAGE', 'How are you?');
  }
}
