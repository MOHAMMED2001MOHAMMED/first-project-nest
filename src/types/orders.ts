import { Document } from 'mongoose';
import { User } from './users';
import { Product } from './products';

export interface Order extends Document {
  owner: User;
  orderID: string;
  product: Product;
  total: number;
}
