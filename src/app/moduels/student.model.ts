import { Schema, model, connect } from 'mongoose'
import {
  TLocalGurdian,
  TStudent,
  StudentMethods,
  StudentModel,
  TUserName,
  Tgurdian,
} from './student.interface'
import validator from 'validator'
const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'], // custon required!
    maxlength: [20, 'Name Cannot be more than 20 characters'],
    // What i am doing in this function if user givse something like this " RahIM  " it will conver to "Rahim"
    validate: function (value: string) {
      const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1)
      if (value !== firstNameStr) {
        return false
      }
      return true
    }, //Normal function use korbo karon this keyword use kora lagte pare
  },
  middleName: {
    type: String,
    required: [true, 'Middle name is requred'],
  },
  lastName: {
    type: String,
    required: [true, 'last name is requred'],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valid',
    },
  },
})

const gurdianSchema = new Schema<Tgurdian>({
  fatherName: {
    type: String,
    trim: true,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
})

const localGurdianSchema = new Schema<TLocalGurdian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
})

// 2. Create a Schema corresponding to the document interface.
const studentSchema = new Schema<TStudent, StudentModel, StudentMethods>({
  //<Student> generic = dynamically type define kore arguemnt hisebe niye
  id: { type: String, required: true, unique: true }, // unique: true :--duplicate value dibe na
  name: {
    type: userNameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: '{VALUE} is not valid', // {VALUE} = user theke dynamic value pawa
    },
    required: true,
  }, // enum : mongoose e ekta type ase jeita k bole enum koyekta value theke jekono ekta ney
  dateOfBirth: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} is not a valid email type',
    },
  },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: { type: String, required: true },
  parmanentAddress: { type: String, required: true },
  gurdian: {
    type: gurdianSchema,
    required: true,
  },
  localGurdian: {
    type: localGurdianSchema,
    required: true,
  },
  profileImage: {
    type: String,
  },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
})

studentSchema.methods.isUserExists = async function name(id: String) {
  const existingUser = await Student.findOne({
    id: id,
  })
  return existingUser
}

// 3. Create a Model.
export const Student = model<TStudent, StudentModel>('User', studentSchema) // Student= type, schema = studentSchema, name = User same as the const value

// In this code we tried to see weather a user exists or not
