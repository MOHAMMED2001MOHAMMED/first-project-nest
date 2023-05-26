import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../types/users';
import { InjectModel } from '@nestjs/mongoose';
import { LoginDTO, RegisterDTO } from 'src/auth/auth.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}
  private async sanitizeUser(user: User) {
    const token = await user.getSignedJwtToken();
    return {
      success: true,
      token,
      data: { _id: user._id, name: user.name, phoneNumber: user.phoneNumber }
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async create(userDTO: RegisterDTO) {
    const { phoneNumber } = userDTO;
    const user = await this.userModel.findOne({ phoneNumber });
    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    const created = new this.userModel(userDTO);
    await created.save();
    return this.sanitizeUser(created);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async findByLogin(userDTO: LoginDTO) {
    const { phoneNumber, password } = userDTO;
    const user = await this.userModel
      .findOne({ phoneNumber })
      .select('+password');
    console.log(user);
    if (!user) {
      throw new HttpException('The user is not found', HttpStatus.UNAUTHORIZED);
    }

    if (!(await bcrypt.compare(password, user['password']))) {
      throw new HttpException(
        'Wrong password or phone number',
        HttpStatus.UNAUTHORIZED
      );
    }
    return this.sanitizeUser(user);
    //const isMatch = await user.matchPassword(password);
  }
}
