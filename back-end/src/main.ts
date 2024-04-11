import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT');

  console.log("check env: ", process.env);
  await app.listen(port, () => {
    Logger.log(
      `>>>>>>>> Nest application listening on port ${port} >>>>>>>>>`)
  });
}
bootstrap();
