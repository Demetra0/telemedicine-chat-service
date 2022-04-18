import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
// import { ChatRepository } from '../../repositories/chat.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Chat, ChatSchema } from '../../models/chat/entities/chat.entity';
import { ChatRepository } from '../../repositories/chat.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Chat.name, schema: ChatSchema }
    ])
  ],
  controllers: [ChatController],
  providers: [ChatService, ChatRepository],
  exports: [ChatService]
})
export class ChatModule {}
