import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
  ParseIntPipe,
  ValidationPipe,
  HttpCode,
  ParseUUIDPipe,
  HttpException
} from '@nestjs/common';
import { UserDto } from './dtos/user.dto';
import { updateUser } from './dtos/update-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  @HttpCode(201)
  createUser(@Body() userData: UserDto) {
    console.log(userData);
    this.userService.create(userData);
    return userData;
  }

  @Get()
  @HttpCode(200)
  findAll(): string[] {
    //return ['Mohammed', 'Jalhoom'];
    throw new HttpException(
      {
        success: false,
        error: 'Test'
      },
      404
    );
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): string {
    console.log(id, typeof id);
    return id.toString();
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() userData: updateUser): string {
    console.log(userData);
    return id.toString();
  }

  @Delete(':id')
  remove(@Param('id') id: number): string {
    return id.toString();
  }
}
