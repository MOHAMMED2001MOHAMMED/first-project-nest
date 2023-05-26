import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class LoginDTO {
  @IsString()
  @IsNotEmpty({ message: 'Please enter phone number' })
  phoneNumber: string;
  @IsString()
  @IsNotEmpty({ message: 'Please enter password' })
  password: string;
}

export class RegisterDTO {
  @IsNotEmpty()
  @IsNumber()
  age: number;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  phoneNumber: string;
}
