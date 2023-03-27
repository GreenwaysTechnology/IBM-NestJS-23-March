import { Module } from '@nestjs/common';
import { GreeterController } from './greeter.controller';
import { GreeterService } from './greeter.service';

@Module({
    imports: [],
    controllers: [GreeterController],
    providers: [GreeterService],
})
export class GreeterModule { }
