import { Injectable } from '@nestjs/common';

const UserData = [
  {
    id: 0,
    username: 'john_doe',
    email: 'john.doe@example.com',
    age: 30,
    city: 'New York',
    country: 'USA',
  },
  {
    id: 1,
    username: 'jane_smith',
    email: 'jane.smith@example.com',
    age: 25,
    city: 'Los Angeles',
    country: 'USA',
  },
  {
    id: 2,
    username: 'bob_johnson',
    email: 'bob.johnson@example.com',
    age: 28,
    city: 'Chicago',
    country: 'USA',
  },
];

@Injectable()
export class UserRepository {
  async findOne(id: number) {
    let user: any = {};
    UserData.forEach((item) => {
      if (item.id == id) {
        user = item;
        return;
      }
    });
    return user;
  }

  async findAll() {
    return UserData;
  }

  async createUser(user: any) {
    UserData.push(user);
    return user;
  }
}
