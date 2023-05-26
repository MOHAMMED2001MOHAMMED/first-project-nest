import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter name product']
    },
    description: {
      type: String,
      required: [true, 'Please enter de']
    },
    price: {
      type: Number,
      required: [true, 'Please enter price']
    }
  },
  { timestamps: true }
);
