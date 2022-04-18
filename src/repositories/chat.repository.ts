import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EntityRepository } from './entity.repository';
import { Chat } from '../models/chat/entities/chat.entity';
import { Model } from 'mongoose';

@Injectable()
export class ChatRepository extends EntityRepository<Chat>{
  constructor(@InjectModel(Chat.name) chatModel: Model<Chat>) {
    super(chatModel);
  }
}