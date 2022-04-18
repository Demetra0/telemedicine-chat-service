import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { MessageRepository } from '../../repositories/message.repository';

@Injectable()
export class MessageService {
  constructor(private readonly messageRepository: MessageRepository) {}

  create(createMessageDto: CreateMessageDto) {
    return this.messageRepository.create(createMessageDto);
  }

  findAll() {
    return this.messageRepository.findAll({});
  }

  findOne(id: string) {
    return this.messageRepository.findOne({ _id: id });
  }

  update(id: string, updateMessageDto: UpdateMessageDto) {
    return this.messageRepository.findOneAndUpdate({ id }, updateMessageDto);
  }

  delete(id: string) {
    return this.messageRepository.delete({ _id: id });
  }
}
