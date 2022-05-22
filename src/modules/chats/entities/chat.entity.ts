import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Chat as IChat } from '../interfaces/chat.interface';
import { Message } from '../../messages/entities/message.entity';

export type ChatDocument = Chat & Document;

@Schema()
export class Chat implements IChat {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  participants: [];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }] })
  messages: Message[];

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
