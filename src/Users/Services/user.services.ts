import { Injectable } from '@nestjs/common';
import { UserRepository } from '../Repository/user.repository';

@Injectable()
export class UserServices {
  // constructor() {
  //   //! In Nest, We don't create own dependencies inside of a constructor.
  //   //! USE DI
  //   this.userRepo = new UserRepository();
  // }

  constructor(private UserRepository: UserRepository) {}

  async findOne(id: number) {
    return this.UserRepository.findOne(id);
  }

  async findAll() {
    return this.UserRepository.findAll();
  }

  async createUser(user: any) {
    return this.UserRepository.createUser(user);
  }
}
