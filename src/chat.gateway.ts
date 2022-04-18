import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

interface User {
  name: string;
  email: string;
  password: string;
  room: string;
}

@WebSocketGateway(8080, { namespace: 'chat' })
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  private logger: Logger = new Logger('AppGateway');

  @SubscribeMessage('userJoined')
  handleUserJoined(
    @MessageBody() user: User,
    @ConnectedSocket() client: Socket,
  ): string | object {
    if (!user.name || !user.room) return 'Данные некооректны';

    client.join(user.room);
    client.emit('message', {
      name: 'admin',
      text: `Добро пожаловать, ${user.name}`,
    });

    client.emit('message', {
      name: 'Test',
      text: `Добро пожаловать11, ${user.name}`,
    });

    client.broadcast.to(user.room).emit('message', {
      name: 'admin',
      text: `Пользователь ${user.name} зашел.`,
    });

    return { userId: client.id };
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    this.server.emit('message', message);
  }

  afterInit(server: Server) {
    this.logger.log('Init');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }
}
