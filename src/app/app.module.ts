import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '../users/user.module';
import { SharedModule } from '../shared/shared.module';

import 'dotenv/config';
import { AuthModule } from 'src/auth/auth.module';
import { OrderModule } from 'src/orders/order.module';
import { ProductModule } from 'src/products/product.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL),
    //UserModule,
    SharedModule,
    AuthModule,
    OrderModule,
    ProductModule
  ]
})
export class AppModule {}
