import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    },
    orderID: {
      type: String,
      required: [true, 'Please enter name']
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'product',
      required: [true, 'Please enter phone number']
    },
    total: {
      type: Number
    }
  },
  { timestamps: true }
);
