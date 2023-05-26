import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty({ message: 'لا تدع القيمة فارغة' })
  name: string;

  /*@IsNotEmpty()
  password: string;

  @IsEmail()
  email?: string;

  @IsString()
  phoneNumber: string;*/
  age: number;
}
