import { Schema, model, connect } from 'mongoose'
import { LocalGurdian, Student, UserName, gurdian } from './student.interface'


const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
})

const gurdianSchema = new Schema<gurdian>({
  fatherName: {
    type: String,
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

const localGurdianSchema = new Schema<LocalGurdian>({
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
const studentSchema = new Schema<Student>({
  //<Student> generic = dynamically type define kore arguemnt hisebe niye
  id: { type: String },
  name: userNameSchema,
  gender: ['male', 'female'], // enum : mongoose e ekta type ase jeita k bole enum koyekta value theke jekono ekta ney
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  parmanentAddress: { type: String, required: true },
  gurdian: gurdianSchema,
  localGurdian: localGurdianSchema,
  profileImage: {
    type: String,
  },
  isActive: ['active', 'blocked'],
})


// 3. Create a Model.
export const StudentModel = model<Student>('User', studentSchema); // Student= type, schema = studentSchema, name = User same as the const value

