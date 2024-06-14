import { Student } from '../student.interface'
import { StudentModel } from '../student.model'

const creatStudentIntoDb = async (student: Student) => {
  // Jeheu database use kortesi mogodb jetar model hocche Student tai student niye aschi
  const result = await StudentModel.create(student)
  return result
}

// Controller theke jeno call dite pari!!
export const StudentServices = {
  creatStudentIntoDb,
}
