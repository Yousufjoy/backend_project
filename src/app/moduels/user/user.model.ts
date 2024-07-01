import { Schema, model, models } from 'mongoose';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: {
        values: ['admin', 'student', 'faculty'],
        message: '{VALUE} not found',
      },
      required: true,
    },
    status: {
      type: String,
      enum: {
        values: ['in-progress', 'blocked'],
        message: '{VALUE} not found',
      },
      default: 'in-progress',
      required: true,
    },
    isDeleted: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model<TUser>('User', userSchema);

export { User };


//5.29