import { Module } from '@nestjs/common';
import { ChatsModule } from './modules/chats/chats.module';
import { AppConfigModule } from './config/app/config.module';
import { DBConfigModule } from './config/database/config.module';
import { MongoDataBaseProviderModule } from './providers/database/mongo/provider.module';
import { MessagesModule } from './modules/messages/messages.module';
import { ReadChatsModule } from './modules/read-chats/read-chats.module';
import { OnlineUsersModule } from './modules/online-users/online-users.module';

@Module({
  imports: [
    AppConfigModule,
    DBConfigModule,
    MongoDataBaseProviderModule,
    ChatsModule,
    MessagesModule,
    ReadChatsModule,
    OnlineUsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
