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
import { ProductService } from './product.service';
import { ProductDTO } from './dto/product.dto';
import { updateProduct } from './dto/update-product.dto';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from 'src/guards/role.guards';
import { User } from 'src/utilities/user.decorator.';
import { User as UserDocument } from '../types/users';
@Controller('Product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Post()
  @UseGuards(AuthGuard('jwt'), new RoleGuard(['admin']))
  createProduct(@Body() data: ProductDTO, @User() user: UserDocument) {
    return this.productService.create(data);
  }
  @Get()
  getAllProduct() {
    return this.productService.getAll();
  }

  @Get(':id')
  getOneProduct(@Param('id') id: string) {
    return this.productService.getOne(id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(['admin']))
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteOne(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(['admin']))
  updateProduct(@Param('id') id: string, @Body() data: updateProduct) {
    return this.productService.updateOne(id, data);
  }
}
