import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    // I'll postgres db for this
  private users = [
    { id: 1, name: 'Furkan' },
    { id: 2, name: 'Tayfun' },
    { id: 3, name: 'Emre' },
    { id: 4, name: 'Ahmet' },
  ];

  findAll() {
    return this.users;
  }
}
