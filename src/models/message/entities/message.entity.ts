import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Chat } from '../../chat/entities/chat.entity';
import * as mongoose from 'mongoose';

@Schema()
export class Message extends Document {
  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  user_id: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chat' }] })
  chat: Chat[];

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);