import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  //PURE http
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  // pure tcp microservice configuration
  /**
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3001,
      },
    },
  );
  await app.listen();
    */
  //HTTP + TCP : This microserivce can act as either tcp app or http app.
  const app = await NestFactory.create(AppModule) //http 

  //Bind both http and tcp servers
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
  })
  //start http and tcp servers
  await app.startAllMicroservices()
  //port
  await app.listen(3003)
  console.log(`Application is runnning on ${await app.getUrl()}`)
}
bootstrap();
