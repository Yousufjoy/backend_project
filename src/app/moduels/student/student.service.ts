import { Student } from '../student.interface'
import { StudentModel } from '../student.model'

const creatStudentIntoDb = async (student: Student) => {
  // Jeheu database use kortesi mogodb jetar model hocche Student tai student niye aschi
  const result = await StudentModel.create(student)
  return result
}

const getAllStudentsFromDbB = async () => {
  const result = await StudentModel.find()
  return result
}

const getSingleStudent = async (id: string) => {
  const result = await StudentModel.findOne({ id })
  return result
}

// Controller theke jeno call dite pari!!
export const StudentServices = {
  creatStudentIntoDb,
  getAllStudentsFromDbB,
  getSingleStudent,
}
