import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UserService } from 'src/shared/user.service';
import { LoginDTO, RegisterDTO } from './auth.dto';
import { AuthService } from './auth.service';
import { Payload } from 'src/types/payload';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  @Post('login')
  async login(@Body() data: LoginDTO) {
    const user = await this.userService.findByLogin(data);
    const payload: Payload = {
      phoneNumber: user.data.phoneNumber,
      isActive: true
    };
    const token = await this.authService.signPayload(payload);
    return { token, user };
  }

  @Post('register')
  async register(@Body() data: RegisterDTO) {
    const user = await this.userService.create(data);
    const payload: Payload = {
      phoneNumber: user.data.phoneNumber,
      isActive: true
    };
    const token = await this.authService.signPayload(payload);
    return { token, user };
  }
}
