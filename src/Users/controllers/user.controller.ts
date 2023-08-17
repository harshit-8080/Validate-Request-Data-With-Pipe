import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDTO } from '../dtos/create-user-dto';
import { UserServices } from '../Services/user.services';

@Controller('/users')
export class UserController {
  userServices: UserServices;
  constructor() {
    //! In Nest, We don't create own dependencies inside of a constructor.
    //! USE DI
    this.userServices = new UserServices();
  }

  @Get()
  getAllUsers() {
    return this.userServices.findAll();
  }

  @Get('/:userId')
  getOneUser(@Param('userId') userId: number) {
    return this.userServices.findOne(userId);
  }

  @Post('/signup')
  createuser(@Body() createUser: CreateUserDTO) {
    return this.userServices.createUser(createUser);
  }
}
