import { Test, TestingModule } from '@nestjs/testing';
import { ReadChatsController } from './read-chats.controller';
import { ReadChatsService } from './read-chats.service';

describe('ReadChatsController', () => {
  let controller: ReadChatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReadChatsController],
      providers: [ReadChatsService],
    }).compile();

    controller = module.get<ReadChatsController>(ReadChatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
