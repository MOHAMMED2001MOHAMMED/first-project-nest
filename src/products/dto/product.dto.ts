import { IsNotEmpty, IsNumber } from 'class-validator';

export class ProductDTO {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  description: string;
  @IsNumber()
  price: number;
}
