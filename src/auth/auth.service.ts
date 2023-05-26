import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/user.service';
import { sign } from 'jsonwebtoken';
import { Payload } from 'src/types/paylod';
@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
  async signPayload(payload: any) {
    return sign(payload, process.env.SECRET_KEY, { expiresIn: '12h' });
  }
  async validationUser(payload: Payload) {
    return await this.userService.findByPayload(payload);
  }
}
