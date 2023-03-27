import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor() {}
  //users api
  //CURD operations
  public findAll(): string {
    return 'users';
  }
  public save(): string {
    return 'save';
  }
  public update(): string {
    return 'update';
  }
  public remove(): string {
    return 'remove';
  }
}
