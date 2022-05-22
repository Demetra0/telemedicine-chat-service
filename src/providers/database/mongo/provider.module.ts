import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DBConfigModule } from '../../../config/database/config.module';
import { DBConfigService } from '../../../config/database/config.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [DBConfigModule],
      useFactory: async (dbConfigService: DBConfigService) => ({
        uri: dbConfigService.host,
      }),
      inject: [DBConfigService],
    }),
  ],
})
export class MongoDataBaseProviderModule {}
