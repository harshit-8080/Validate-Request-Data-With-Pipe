import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateUserDTO } from '../dtos/create-user-dto';
import { UserServices } from '../Services/user.services';

@Controller('/users')
export class UserController {
  userServices: UserServices;
  constructor(private UserServices: UserServices) {}

  @Get()
  getAllUsers() {
    return this.UserServices.findAll();
  }

  @Get('/:userId')
  async getOneUser(@Param('userId') userId: number) {
    let user: any = await this.UserServices.findOne(userId);
    if (Object.keys(user).length == 0) {
      return new NotFoundException('user not found');
    }
    return user;
  }

  @Post('/signup')
  createuser(@Body() createUser: CreateUserDTO) {
    return this.UserServices.createUser(createUser);
  }
}
