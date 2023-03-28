import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GreeterModule } from './greeter/greeter.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { greeter } from './middlewares/greeter.middleware';

//in order to qualify this is Module object
@Module({
  imports: [GreeterModule, UsersModule, ProductsModule], // if AppModule has any submodules as dependency
  controllers: [AppController], // if AppModule has controller as dependency
  providers: [AppService], // if AppModule has Service as Dependency.
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    console.log('middleware');
    consumer.apply(LoggerMiddleware, greeter).forRoutes('*');
  }
}
