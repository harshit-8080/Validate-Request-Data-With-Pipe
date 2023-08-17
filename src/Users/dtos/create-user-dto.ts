import { IsNumber, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  contact: string;

  @IsNumber()
  age: number;
}
