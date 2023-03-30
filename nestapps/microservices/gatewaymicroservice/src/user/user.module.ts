import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports:[ ClientsModule.register([
    {
      name: 'USERSERVICE',
      transport: Transport.NATS,
      options: {
        servers: ['nats://localhost:4222']
      },
    },
  ])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
