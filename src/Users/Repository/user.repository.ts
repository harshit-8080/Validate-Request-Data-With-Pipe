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

export class UserRepository {
  async findOne(id: number) {
    console.log('inside findOne method');
    console.log('id --> ', id);

    for (let i = 0; i < UserData.length; i++) {
      if (UserData[i]['id'] == id) {
        return UserData[id];
      }
    }
    return 'Not found';
  }

  async findAll() {
    return UserData;
  }

  async createUser(user: any) {
    UserData.push(user);
    return user;
  }
}
