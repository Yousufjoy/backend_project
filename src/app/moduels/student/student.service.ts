// import { TStudent } from './student.interface'
import { Student } from './student.model'

// const creatStudentIntoDb = async (studentData: TStudent) => {
//   if (await Student.isUserExists(studentData.id)) {
//     throw new Error(' User Already Exists ')
//   }

//   const result = await Student.create(studentData)
//   return result
// }

const getAllStudentsFromDbB = async () => {
  const result = await Student.find()
  return result
}

const getSingleStudent = async (id: string) => {
  const result = await Student.findOne({ id })
  return result
}
const deleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true }) // second parameter hisebe bolte hobe ki update korte chai
  return result
}

// Controller theke jeno call dite pari!!
export const StudentServices = {
  // creatStudentIntoDb,
  getAllStudentsFromDbB,
  getSingleStudent,
  deleteStudentFromDB,
}
