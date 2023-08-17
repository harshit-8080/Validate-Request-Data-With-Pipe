import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserServices } from './Services/user.services';
import { UserRepository } from './Repository/user.repository';

@Module({
  controllers: [UserController],
  providers: [UserServices, UserRepository],
})
export class UserModule {}
