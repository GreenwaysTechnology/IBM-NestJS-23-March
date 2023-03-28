import { HttpException, HttpStatus } from "@nestjs/common";


export class UserIdNotFoundException extends HttpException {
    constructor(message: string, status:HttpStatus) {
        super(message, status)
    }
}