import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OnlineUsersService } from './online-users.service';
import { CreateOnlineUserDto } from './dto/create-online-user.dto';
import { UpdateOnlineUserDto } from './dto/update-online-user.dto';

@Controller('online-users')
export class OnlineUsersController {
  constructor(private readonly onlineUsersService: OnlineUsersService) {}

  @Post()
  create(@Body() createOnlineUserDto: CreateOnlineUserDto) {
    return this.onlineUsersService.create(createOnlineUserDto);
  }

  @Get()
  findAll() {
    return this.onlineUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.onlineUsersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOnlineUserDto: UpdateOnlineUserDto) {
    return this.onlineUsersService.update(+id, updateOnlineUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.onlineUsersService.remove(+id);
  }
}
