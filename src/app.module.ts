import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatModule } from './modules/chat/chat.module';
import { AppConfigModule } from './config/app/config.module';
import { MessageModule } from './modules/message/message.module';
import { ChatGateway } from './chat.gateway';

@Module({
  imports: [
    AppConfigModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    ChatModule,
    MessageModule,
  ],
  controllers: [],
  providers: [ChatGateway],
})
export class AppModule {}