import { Injectable,NotFoundException  } from '@nestjs/common';

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

  findOne(id: number) {
    const user = this.users.find((u) => u.id === id);
    if (!user) throw new NotFoundException(`Kullanıcı bulunamadı: ${id}`);
    return user;
  }

  count() {
    return this.users.length;
  }
}