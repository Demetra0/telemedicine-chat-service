import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class DBConfigService {
  constructor(private configService: ConfigService) {}

  get connection(): string {
    return this.configService.get<string>('db.connection');
  }

  get host(): string {
    return this.configService.get<string>('db.host');
  }

  get port(): number {
    return Number(this.configService.get<string>('db.port'));
  }

  get database(): string {
    return this.configService.get<string>('db.database');
  }

  get username(): string {
    return this.configService.get<string>('db.database');
  }

  get password(): string {
    return this.configService.get<string>('db.database');
  }
}
