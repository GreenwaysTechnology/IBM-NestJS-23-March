import { ConfigService } from '@nestjs/config/dist/config.service';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('HTTP_PORT') || 3000;
  await app.listen(port);
}
bootstrap();
