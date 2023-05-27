import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards
} from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './dto/order.dto';
import { updateOrder } from './dto/update-order.dto';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from 'src/guards/role.guards';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'), new RoleGuard(['user']))
  createOrder(@Body() order: OrderDto) {
    return this.orderService.create(order);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'), new RoleGuard(['admin']))
  getAllOrder() {
    return this.orderService.getAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(['admin', 'user']))
  getOneOrder(@Param('id') id: string) {
    return this.orderService.getOne(id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(['admin']))
  deleteOneOrder(@Param('id') id: string) {
    return this.orderService.deleteOne(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(['admin']))
  updateOneOrder(@Param('id') id: string, @Body() data: updateOrder) {
    return this.orderService.updateOne(id, data);
  }
}
