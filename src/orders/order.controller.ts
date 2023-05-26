import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './dto/order.dto';
import { updateOrder } from './dto/update-order.dto';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  createOrder(@Body() order: OrderDto) {
    return this.orderService.create(order);
  }

  @Get()
  getAllOrder() {
    return this.orderService.getAll();
  }

  @Get(':id')
  getOneOrder(@Param('id') id: string) {
    return this.orderService.getOne(id);
  }

  @Delete(':id')
  deleteOneOrder(@Param('id') id: string) {
    return this.orderService.deleteOne(id);
  }

  @Put(':id')
  updateOneOrder(@Param('id') id: string, @Body() data: updateOrder) {
    return this.orderService.updateOne(id, data);
  }
}
