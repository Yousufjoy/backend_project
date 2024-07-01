import config from '../../config'
import { TStudent } from '../student/student.interface'
import { Student } from '../student/student.model'
import { TUser } from './user.interface'

import { userModel } from './user.model'

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // Create a user object
  const userData: Partial<TUser> = {} // Jehetu sob gulo key lagtese na

  // as password is optional, if password not given , use default password
  if (!password) {
    userData.password = config.default_password as string
  } else {
    userData.password = password
  }

  // set student role
  userData.role = 'student'

  // Set manually generated id
  userData.id = '2030100001'

  // create a user
  const newUser = await userModel.create(userData) // Similar to resutl

  // create a student
  if (Object.keys(newUser).length) {
    // Making it array so that we can use length property
    // set id , _id
    studentData.id = newUser.id // This is the embeded id of student
    studentData.user = newUser._id // This is the objectID of student // Ref id

    const newStudent = await Student.create(studentData)
    return newStudent
  }

  return newUser
}

export const userServices = {
  createStudentIntoDB,
}
