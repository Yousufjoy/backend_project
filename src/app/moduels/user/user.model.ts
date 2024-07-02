import { Schema, model, models } from 'mongoose'
import { TUser } from './user.interface'
// import config from '../../config'

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      unique: true,
      maxlength: [20, 'Cannot be more than 20 characters'],
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
  },
)

const User = models.User || model<TUser>('User', userSchema)

// userSchema.pre('save', async function (next) {
//   const user = this
//   if (user.isModified('password')) {
//     try {
//       user.password = await bcrypt.hash(
//         user.password,
//         Number(config.bcrypt_salt_rounds),
//       )
//     } catch (error) {
//       return next()
//     }
//   }
//   next()
// })

// userSchema.post('save', function (doc, next) {
//   doc.password = ''
//   next()
// })

// userSchema.pre('find', function (next) {
//   next()
// })

export { User }