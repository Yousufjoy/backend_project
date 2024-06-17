import { Schema, model, connect } from 'mongoose'

export type UserName = {
  firstName: string
  middleName?: string
  lastName: string
}
export type gurdian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}

export type LocalGurdian = {
  name: string
  occupation: string
  contactNo: string
  address: string
}

// 1. Create an interface representing a document in MongoDB.
export type Student = {
  id: string
  name: UserName
  gender: 'male' | 'female'
  dateOfBirth: string
  email: string
  contactNo: string
  emergencyContactNo: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  presentAddress: string
  parmanentAddress: string
  gurdian: gurdian
  localGurdian: LocalGurdian
  profileImage?: string //Db te url rakhbo tai string
  isActive: 'active' | 'blocked'
}
