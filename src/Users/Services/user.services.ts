import { UserRepository } from '../Repository/user.repository';

export class UserServices {
  userRepo: UserRepository;

  constructor() {
    //! In Nest, We don't create own dependencies inside of a constructor.
    //! USE DI
    this.userRepo = new UserRepository();
  }

  async findOne(id: number) {
    return this.userRepo.findOne(id);
  }

  async findAll() {
    return this.userRepo.findAll();
  }

  async createUser(user: any) {
    return this.userRepo.createUser(user);
  }
}
