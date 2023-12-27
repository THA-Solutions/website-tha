import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { apiEnv } from './environments/environment';

const { isProd, api } = apiEnv;

const runHost = isProd ? '0.0.0.0' : 'localhost';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  await app.listen(api.port, runHost);
  Logger.log(
    `🚀 Rota do Back-end: http://localhost:${api.port}/${globalPrefix}/`
  );
}

bootstrap();
