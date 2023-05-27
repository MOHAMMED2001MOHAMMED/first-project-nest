import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { SharedModule } from 'src/shared/shared.module';
import { AuthService } from './auth.service';
import { UserService } from 'src/shared/user.service';
import { JwtStrategy } from './jwb.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [SharedModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy, AuthService]
})
export class AuthModule {}
