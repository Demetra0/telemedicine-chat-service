import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsNumber()
  @IsNotEmpty()
  user_id: number

  @IsArray()
  @IsNotEmpty()
  chat: []
}
