import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from 'src/types/orders';
import { OrderDto } from './dto/order.dto';
import { updateOrder } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(@InjectModel('Order') private orderModel: Model<Order>) {}

  async create(data: OrderDto) {
    const created = await this.orderModel.create(data);
    return created;
  }

  async getAll() {
    const getAllOrder = await this.orderModel.find();
    return getAllOrder;
  }

  async getOne(id: string) {
    const getOneOrder = await this.orderModel.findById(id);
    return getOneOrder;
  }

  async deleteOne(id: string) {
    const deleteOrder = await this.orderModel.findByIdAndDelete(id);
    return deleteOrder;
  }

  async updateOne(id: string, data: updateOrder) {
    const updateOrder = await this.orderModel.findByIdAndUpdate(id, data, {
      new: true
    });
    return updateOrder;
  }
}
