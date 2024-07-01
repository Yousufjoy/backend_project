import config from '../../config'
import { TStudent } from '../student/student.interface'
import { Student } from '../student/student.model'
import { TUser } from './user.interface'
import { User } from './user.model'

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // Create a user object
  const userData: Partial<TUser> = {
    role: 'student',
    password: password || config.default_password as string,
    id: '2030100001'
  }

  // create a user
  const newUser = await User.create(userData) // Similar to result

  // create a student
  if (newUser) {
    // Making it array so that we can use length property
    // set id , _id
    studentData.id = newUser.id // This is the embeded id of student
    studentData.user = newUser._id // This is the objectID of student // Ref id

    const newStudent = await Student.create(studentData)
    return newStudent
  }

  return newUser
}

export const UserService = {
  createStudentIntoDB,
}
