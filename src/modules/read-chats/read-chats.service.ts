import { Injectable } from '@nestjs/common';
import { CreateReadChatDto } from './dto/create-read-chat.dto';
import { UpdateReadChatDto } from './dto/update-read-chat.dto';

@Injectable()
export class ReadChatsService {
  create(createReadChatDto: CreateReadChatDto) {
    return 'This action adds a new readChat';
  }

  findAll() {
    return `This action returns all readChats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} readChat`;
  }

  update(id: number, updateReadChatDto: UpdateReadChatDto) {
    return `This action updates a #${id} readChat`;
  }

  remove(id: number) {
    return `This action removes a #${id} readChat`;
  }
}
