import { Document } from 'mongoose';

export interface User extends Document {
  getSignedJwtToken(): unknown;
  token: any;
  name: string;
  phoneNumber: string;
  address: string;
  isActive: boolean;
  role: string;
}
