import { Test, TestingModule } from '@nestjs/testing';
import { ReadChatsService } from './read-chats.service';

describe('ReadChatsService', () => {
  let service: ReadChatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReadChatsService],
    }).compile();

    service = module.get<ReadChatsService>(ReadChatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
