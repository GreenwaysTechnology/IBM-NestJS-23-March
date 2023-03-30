import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ClientProxy } from '@nestjs/microservices'

@Injectable()
export class UserService {
  constructor(@Inject('USERSERVICE') private readonly client: ClientProxy) { }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    //return `This action returns all user`;
    const pattern = { cmd: 'findAllUser' };
    return this.client.send<any>(pattern, 'null');
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
