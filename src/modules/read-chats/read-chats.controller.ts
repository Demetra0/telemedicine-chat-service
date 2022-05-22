import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReadChatsService } from './read-chats.service';
import { CreateReadChatDto } from './dto/create-read-chat.dto';
import { UpdateReadChatDto } from './dto/update-read-chat.dto';

@Controller('read-chats')
export class ReadChatsController {
  constructor(private readonly readChatsService: ReadChatsService) {}

  @Post()
  create(@Body() createReadChatDto: CreateReadChatDto) {
    return this.readChatsService.create(createReadChatDto);
  }

  @Get()
  findAll() {
    return this.readChatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.readChatsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReadChatDto: UpdateReadChatDto,
  ) {
    return this.readChatsService.update(+id, updateReadChatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.readChatsService.remove(+id);
  }
}
