import { Injectable } from '@nestjs/common';
import { User } from './interface/user.interface';
@Injectable()
export class UserService {
  findByPayload(_payload: any) {
    throw new Error('Method not implemented.');
  }
  private readonly users: User[] = [];

  create(user: User) {
    console.log(user);
    this.users.push(user);
  }

  findAll(): User[] {
    return this.users;
  }
}
