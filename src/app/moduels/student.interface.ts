import { Schema, model, connect, Model } from 'mongoose'

export type TUserName = {
  firstName: string
  middleName?: string
  lastName: string
}
export type Tgurdian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}

export type TLocalGurdian = {
  name: string
  occupation: string
  contactNo: string
  address: string
}

// 1. Create an interface representing a document in MongoDB.
export type TStudent = {
  id: string
  name: TUserName
  gender: 'male' | 'female'
  dateOfBirth: string
  email: string
  contactNo: string
  emergencyContactNo: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  presentAddress: string
  parmanentAddress: string
  gurdian: Tgurdian
  localGurdian: TLocalGurdian
  profileImage?: string //Db te url rakhbo tai string
  isActive: 'active' | 'blocked'
}

export type StudentMethods = {
  isUserExists(id: string): Promise<TStudent | null>
}

export type StudentModel = Model<TStudent, {}, StudentMethods>
