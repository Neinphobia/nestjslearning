import { Injectable,NotFoundException  } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
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
   create(createUserDto: CreateUserDto) {
    const newUser = {
      id: this.users.length + 1, // basit id üretimi
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  delete(id: number) {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) throw new NotFoundException(`Kullanıcı bulunamadı: ${id}`);
    const deleted = this.users.splice(index, 1);
    return deleted[0];
  }
}