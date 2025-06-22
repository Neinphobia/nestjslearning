import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return this.userRepo.findOneBy({ id });
  }

  count() {
    return this.userRepo.count();
  }

  async create(dto: CreateUserDto) {
    const newUser = this.userRepo.create(dto);
    return await this.userRepo.save(newUser);
  }

  async delete(id: number) {
    const user = await this.userRepo.findOneBy({ id });
    if (!user) throw new NotFoundException(`Kullanıcı bulunamadı: ${id}`);
    return this.userRepo.remove(user);
  }
}
