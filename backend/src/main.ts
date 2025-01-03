import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();

const logger = new Logger('Main');

async function bootstrap() {
  const port = process.env.PORT;
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // Enables class-transformer to convert payloads
      stopAtFirstError: true, // Stops validation on the first error
    }),
  );

  app.enableVersioning({
    type: VersioningType.URI,
  });

  app
    .listen(port)
    .then(() => {
      // customer logger added after running the server successfully
      logger.log(`Server running on http://localhost:${port}\n`);
    })
    .catch((error) => logger.error(`Server is not running: `, error.stack));
}
bootstrap();
