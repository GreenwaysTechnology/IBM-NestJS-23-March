import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    // ClientsModule.register([
    //   {
    //     name: 'USERSERVICE',
    //     transport: Transport.TCP,
    //     options: {
    //       port: 3001,
    //     },
    //   },
    // ]),
    ClientsModule.register([
      {
        name: 'USERSERVICE',
        transport: Transport.NATS,
        options: {
          servers: ['nats://localhost:4222']
        },
      },
    ]),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
