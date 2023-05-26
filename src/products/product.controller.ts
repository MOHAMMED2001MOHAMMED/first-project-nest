import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDTO } from './dto/product.dto';
import { updateProduct } from './dto/update-product.dto';
@Controller('Product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Post()
  createProduct(@Body() data: ProductDTO) {
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
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteOne(id);
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() data: updateProduct) {
    return this.productService.updateOne(id, data);
  }
}
