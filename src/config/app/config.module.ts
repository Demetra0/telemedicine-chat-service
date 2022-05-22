import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import configuration from './configuration';
import { AppConfigService } from './config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        APP_NAME: Joi.string().default('NestService'),
        APP_ENV: Joi.string()
          .valid('development', 'production', 'test')
          .default('development'),
        APP_DEBUG: Joi.bool().default(true),
        APP_HTTP_PORT: Joi.number().default(5000),
        APP_WS_PORT: Joi.number().default(5080),
      }),
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
