import { Injectable } from '@nestjs/common';
import { EntityRepository } from './entity.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from '../models/message/entities/message.entity';

@Injectable()
export class MessageRepository extends EntityRepository<Message>{
  constructor(@InjectModel(Message.name) messageModel: Model<Message>) {
    super(messageModel);
  }
}