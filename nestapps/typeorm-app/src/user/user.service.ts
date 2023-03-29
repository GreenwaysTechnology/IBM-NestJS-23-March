import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) { }

  create(createUserDto: CreateUserDto): Promise<User> {
    //create user entity object
    const user = new User();
    //populate the data which is submitted user
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.isActive = createUserDto.isActive;
    //persist data into database
    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id: id })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number): Promise<any> {
    return this.userRepository.delete(id)
  }
}
