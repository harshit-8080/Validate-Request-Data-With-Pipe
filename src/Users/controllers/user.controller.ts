import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from '../dtos/create-user-dto';

@Controller('/users')
export class UserController {
  @Post('/signup')
  createuser(@Body() createUser: CreateUserDTO) {
    console.log('user created ==> ', createUser);
    return {
      message: createUser,
      response: 'Create user',
    };
  }
}
