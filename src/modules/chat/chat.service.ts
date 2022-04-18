import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { ChatRepository } from '../../repositories/chat.repository';

@Injectable()
export class ChatService {
  constructor(private readonly chatRepository: ChatRepository) {}

  create(createChatDto: CreateChatDto) {
    return this.chatRepository.create(createChatDto);
  }

  findAll() {
    return this.chatRepository.findAll({});
  }

  findOne(id: string) {
    return this.chatRepository.findOne({ _id: id });
  }

  update(id: string, updateChatDto: UpdateChatDto) {
    return this.chatRepository.findOneAndUpdate({ id }, updateChatDto);
  }

  delete(id: string) {
    return this.chatRepository.delete({ _id: id });
  }
}
