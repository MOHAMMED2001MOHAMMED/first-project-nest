import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../types/products';
import { ProductDTO } from './dto/product.dto';
import { updateProduct } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}
  async create(data: ProductDTO) {
    const created = await this.productModel.create(data);
    return created;
  }
  async getAll() {
    const getAllProduct = await this.productModel.find();
    return getAllProduct;
  }
  async getOne(id: string) {
    const getOneProduct = await this.productModel.findById(id);
    return getOneProduct;
  }

  async deleteOne(id: string) {
    const deleteOrder = await this.productModel.findByIdAndDelete(id);
    return deleteOrder;
  }

  async updateOne(id: string, data: updateProduct) {
    const updateOrder = await this.productModel.findByIdAndUpdate(id, data, {
      new: true
    });
    return updateOrder;
  }
}
