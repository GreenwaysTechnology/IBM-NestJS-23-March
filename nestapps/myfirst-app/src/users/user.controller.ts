import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  HttpCode,
  Header,
  Res,
  Param,
  Query,
  Body,
  HttpException,
  HttpStatus,
  UseFilters,
  ForbiddenException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { HttpExceptionFilter } from '../filters/http.exception.filters';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './user.type';
import { UserIdNotFoundException } from './useridnotfound.exception';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) { }
  // Get /users
  @Get()
  @HttpCode(200)
  @Header('secret', 'A$%#$3434') // custom header
  findAll(): Array<User> {
    return this.userService.findAll();
  }

  //async api
  @Get('async')
  findAllAsync(): Promise<User[]> {
    return this.userService.findAllAsync();
  }
  @Get('reactive')
  findAllReactive(): Observable<User[]> {
    return this.userService.findAllReactive();
  }

  //handle error
  @Get('error')
  @UseFilters(new HttpExceptionFilter())
  doSomething() {
    throw new ForbiddenException();
  }

  //express way of writting.
  @Get('express')
  //@Res will get Express Response Object as dependency
  public findAllUsingExpress(@Res() response) {
    //express style code:
    return response.status(200).json({ id: 1, name: 'something' });
  }
  @Get('query')
  public query(@Query() queryparams): any {
    console.log(queryparams);
    return queryparams;
  }

  //path parameters
  //   @Get(':id') // which is dynamic value
  //   findOne(@Param() params):string{
  //       console.log(params)
  //      return `${params.id}`;
  //   }

  @Get(':id') // which is dynamic value
  async findOne(@Param('id') id: number): Promise<any> {
    //biz logic to ensure that id must be greater than 5
    // if (id >= 5) {
    //     return `${id}`;
    // } else {
    //     throw new HttpException('The id which is requested not found',HttpStatus.NOT_FOUND)
    // }
    try {
      const res = await this.userService.findById(id);
      return res;
    } catch (err) {
      // throw new HttpException(
      //   { status: HttpStatus.NOT_FOUND, error: 'something went wrong' },
      //   HttpStatus.NOT_FOUND,
      //   { cause: err },
      // );
      throw new UserIdNotFoundException('User id Not Found', HttpStatus.NOT_FOUND)
    }
  }

  //return a user
  @Get('user')
  getUser(): User {
    //object is returned
    //nest converts this object into json.
    return {
      id: 1,
      name: 'Subramanian Murugan',
      email: 'sasubramanian_md@hotmail.com',
    };
  }

  @Post()
  save(@Body() user: CreateUserDto): string {
    return this.userService.save(user);
  }
  @Delete()
  remove(): string {
    return this.userService.remove();
  }
  @Put()
  update(): string {
    return this.userService.update();
  }
}
