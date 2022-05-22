import { Message } from '../../messages/entities/message.entity';

export interface Chat {
  name: string;
  participants: [];
  messages: Message[];
  createdAt: Date;
}
