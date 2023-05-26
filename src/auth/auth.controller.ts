import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UserService } from 'src/shared/user.service';
import { LoginDTO, RegisterDTO } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('login')
  login(@Body() data: LoginDTO) {
    return this.userService.findByLogin(data);
  }

  @Post('register')
  register(@Body() data: RegisterDTO) {
    return this.userService.create(data);
  }
}
