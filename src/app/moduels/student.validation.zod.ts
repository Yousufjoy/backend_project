import { z } from 'zod'
import { TLocalGurdian, TStudent, TUserName } from './student.interface'

// Define the UserName schema
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .max(20, 'Name cannot be more than 20 characters')
    .refine((value) => {
      const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1)
      return value === firstNameStr
    }, 'First name must start with an uppercase letter followed by lowercase letters'),
  middleName: z.string(),
  lastName: z.string().refine((value) => /^[A-Za-z]+$/.test(value), {
    message: '{VALUE} is not valid',
  }),
})

// Define the Gurdian schema
const gurdianValidationSchema = z.object({
  fatherName: z.string().trim(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
})

// Define the LocalGurdian schema
const localGurdianValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
})

// Define the Student schema
const studentValidationSchema = z.object({
  id: z.string(),
  password: z.string(),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female'], {
    errorMap: (issue, _ctx) => {
      return { message: `{VALUE} is not valid` }
    },
  }),
  dateOfBirth: z.string(),
  email: z.string().email('{VALUE} is not a valid email type'),
  contactNo: z.string(),
  emergencyContactNo: z.string(),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string(),
  parmanentAddress: z.string(),
  gurdian: gurdianValidationSchema,
  localGurdian: localGurdianValidationSchema,
  profileImage: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
})

export default studentValidationSchema
