import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// function bootstrap() {
//   NestFactory.create(AppModule).then(app => {
//     return app.listen(300)
//   }).catch(err => { })
// }

async function bootstrap() {
  //create application Object by calling Factory method
  //here app is just variable holding application object reference
  const app = await NestFactory.create(AppModule);
  //to start web container which is running on express container
  await app.listen(3000);
}
bootstrap();
