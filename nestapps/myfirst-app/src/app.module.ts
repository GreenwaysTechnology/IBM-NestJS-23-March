import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GreeterModule } from "./greeter/greeter.module";
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';


//in order to qualify this is Module object
@Module({
  imports: [GreeterModule, UsersModule, ProductsModule], // if AppModule has any submodules as dependency
  controllers: [AppController], // if AppModule has controller as dependency
  providers: [AppService]  // if AppModule has Service as Dependency.
})
export class AppModule { }

