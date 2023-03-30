import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }

  @MessagePattern({cmd:'createUser'})
  create(@Payload() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @MessagePattern({ cmd: 'findAllUser' })
  findAll(data:any) {
    return this.userService.findAll();
  }

  @MessagePattern({cmd:'findOneUser'})
  findOne(@Payload() id: number) {
    return this.userService.findOne(id);
  }

  @MessagePattern({cmd:'updateUser'})
  update(@Payload() updateUserDto: UpdateUserDto) {
    return this.userService.update(updateUserDto.id, updateUserDto);
  }

  @MessagePattern({cmd:'removeUser'})
  remove(@Payload() id: number) {
    return this.userService.remove(id);
  }
}