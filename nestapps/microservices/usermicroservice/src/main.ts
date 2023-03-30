import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  //This app runs on HTTP server
  // const app = await NestFactory.create(AppModule);
  //This app runs on TCP server
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   {
  //     transport: Transport.TCP,
  //     options: {
  //       port: 3001,
  //     },
  //   },
  // );
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.NATS,
      options: {
        servers: ['nats://localhost:4222']
      },
    },
  );
  await app.listen();
}
bootstrap();
