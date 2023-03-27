import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }
    // Get /users
    @Get()
    findAll(): string {
        return this.userService.findAll()
    }
    @Post()
    save(): string {
        return this.userService.save()
    }
    @Delete()
    remove(): string {
        return this.userService.remove()
    }
    @Put()
    update(): string {
        return this.userService.update()
    }
}
