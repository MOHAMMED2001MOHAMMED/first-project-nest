import * as mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

export const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter name']
    },
    phoneNumber: {
      type: String,
      required: [true, 'Please enter phone number']
    },
    password: {
      type: String,
      select: false,
      required: [true, 'Please enter password']
    },
    address: {
      type: String,
      required: [true, 'Please enter address']
    },
    isActive: {
      type: Boolean,
      default: true
    },
    token: {
      type: String,
      select: false
    },
    role: {
      type: String,
      default: 'user'
    }
  },
  { timestamps: true }
);

UserSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(this['password'], salt);
    this['password'] = hashed;
  } catch (err) {
    return next(err);
  }
});

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Sign JWT and return
/*
UserSchema.methods.getSignedJwtToken = async function () {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;

  if (!user.token) {
    const token = jwt.sign(
      { _id: user._id.toString() },
      process.env.JWT_SECRET
    );

    user.token = token;
    await user.save();

    return token;
  } else {
    return user.token;
  }
};*/
