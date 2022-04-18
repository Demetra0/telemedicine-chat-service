import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Message, MessageSchema } from '../../models/message/entities/message.entity';
import { MessageRepository } from '../../repositories/message.repository';

@Module({
  imports:[
      MongooseModule.forFeature([
        { name: Message.name, schema: MessageSchema }
      ])
  ],
  controllers: [MessageController],
  providers: [MessageService, MessageRepository],
  exports: [MessageService]
})
export class MessageModule {}
