import { PartialType } from '@nestjs/mapped-types';
import { CreateReadChatDto } from './create-read-chat.dto';

export class UpdateReadChatDto extends PartialType(CreateReadChatDto) {}
