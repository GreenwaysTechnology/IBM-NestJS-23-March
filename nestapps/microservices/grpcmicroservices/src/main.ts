import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';
import { grpcClientOptions } from './grpc-client.options';

async function bootstrap() {
  /**
    * This example contains a hybrid application (HTTP + gRPC)
    * You can switch to a microservice with NestFactory.createMicroservice() as follows:
    *
    * const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    *  transport: Transport.GRPC,
    *  options: {
    *    package: 'person',
    *    protoPath: join(__dirname, './person/person.proto'),
    *  }
    * });
    * await app.listen();
    *
    */


  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'person',
      protoPath: join(__dirname, './person/person.proto'),
    }
  });
  await app.listen();
  console.log('Grpc standalone Server is Running')


  //Hybrid Server (HTTP + Grpc)
  // const app = await NestFactory.create(AppModule);
  // app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);
  // await app.startAllMicroservices();
  // await app.listen();
  // console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
