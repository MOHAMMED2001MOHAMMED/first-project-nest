import { IsNotEmpty, IsNumber, IsMongoId } from 'class-validator';
import { Product } from 'src/types/products';
import { User } from 'src/types/users';

export class OrderDto {
  owner: User;
  @IsNotEmpty({ message: 'Please enter order id' })
  orderID: string;
  product: Product;
  @IsNotEmpty({ message: 'Please enter total' })
  @IsNumber()
  total: number;
}

export class OrderDtoID {
  @IsMongoId()
  id: string;
}
