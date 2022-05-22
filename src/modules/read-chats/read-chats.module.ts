import { Module } from '@nestjs/common';
import { ReadChatsService } from './read-chats.service';
import { ReadChatsController } from './read-chats.controller';

@Module({
  controllers: [ReadChatsController],
  providers: [ReadChatsService],
})
export class ReadChatsModule {}
