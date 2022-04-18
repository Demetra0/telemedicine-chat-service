import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { IoAdapter } from '@nestjs/platform-socket.io';
import { ServerOptions } from 'socket.io';
import { AppConfigService } from './config/app/config.service';

export class SocketAdapter extends IoAdapter {
  createIOServer(
    port: number,
    options?: ServerOptions & {
      namespace?: string;
      server?: any;
    },
  ) {
    return super.createIOServer(port, { ...options, cors: true });
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.setGlobalPrefix('api');

  app.useWebSocketAdapter(new SocketAdapter(app));

  const appConfig: AppConfigService = app.get(AppConfigService);
  await app.listen(appConfig.port);

  console.log(`Server started on port ${appConfig.port}`);
}

bootstrap();
