import { Injectable } from '@nestjs/common';
import { CreateOnlineUserDto } from './dto/create-online-user.dto';
import { UpdateOnlineUserDto } from './dto/update-online-user.dto';

@Injectable()
export class OnlineUsersService {
  create(createOnlineUserDto: CreateOnlineUserDto) {
    return 'This action adds a new onlineUser';
  }

  findAll() {
    return `This action returns all onlineUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} onlineUser`;
  }

  update(id: number, updateOnlineUserDto: UpdateOnlineUserDto) {
    return `This action updates a #${id} onlineUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} onlineUser`;
  }
}
