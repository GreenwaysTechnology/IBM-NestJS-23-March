import { Injectable } from '@nestjs/common';
import { filter, Observable, of, map } from 'rxjs';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.type';

//mock data
const USERS: User[] = [
  { id: 1, name: 'Subramanian Murugan', email: 'subu@gmail.com', status: true },
  { id: 2, name: 'admin1', email: 'admin1@gmail.com', status: false },
  { id: 3, name: 'admin2', email: 'admin2@gmail.com', status: true },
  { id: 4, name: 'admin3', email: 'admin3@gmail.com', status: false },
  { id: 5, name: 'admin4', email: 'admin4@gmail.com', status: true },

];
@Injectable()
export class UserService {
  constructor() { }
  //users api
  //CURD operations
  //sync api
  public findAll(): Array<User> {
    return [
      { id: 1, name: 'Subramanian Murugan', email: 'subu@gmail.com', status: true },
      { id: 2, name: 'admin1', email: 'admin1@gmail.com', status: false },
      { id: 3, name: 'admin2', email: 'admin2@gmail.com', status: true },
      { id: 4, name: 'admin3', email: 'admin3@gmail.com', status: false },
      { id: 5, name: 'admin4', email: 'admin4@gmail.com', status: true },

    ];
  }

  //return promise
  public findAllAsync(): Promise<Array<User>> {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 100, USERS);
    });
  }
  //return Observable
  public findAllReactive(): Observable<User[]> {
    return of(USERS).pipe(map(results => results.filter(user => {
      return user.status === true
    })));
  }

  public findById(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      if (id >= 5) {
        setTimeout(resolve, 100, id)
      } else {
        setTimeout(reject, 100, 'Id Not found')
      }
    })
  }

  public save(user: CreateUserDto): string {
    console.log(user);
    return 'save';
  }
  public update(): string {
    return 'update';
  }
  public remove(): string {
    return 'remove';
  }
}
