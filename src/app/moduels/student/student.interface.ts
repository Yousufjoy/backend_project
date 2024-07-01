import { Schema, model, connect, Model } from 'mongoose'

export type TUserName = {
  firstName: string
  middleName?: string
  lastName: string
}
export type TGuardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}

export type TLocalGuardian = {
  name: string
  occupation: string
  contactNo: string
  address: string
}

// 1. Create an interface representing a document in MongoDB.
export type TStudent = {
  user: any
  id: string
  password: string
  name: TUserName
  gender: 'male' | 'female'
  dateOfBirth: string
  email: string
  contactNo: string
  emergencyContactNo: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  presentAddress: string
  parmanentAddress: string
  guardian: TGuardian
  localGuardian: TLocalGuardian
  profileImage?: string //Db te url rakhbo tai string
  isActive: 'active' | 'blocked'
  isDeleted: boolean
}

// For creating static

export interface StudentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>
}

//For creating instance
// export type StudentMethods = {
//   isUserExists(id: string): Promise<TStudent | null>
// }

// export type StudentModel = Model<TStudent, {}, StudentMethods>