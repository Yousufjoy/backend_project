import { TStudent } from '../student.interface'
import { Student } from '../student.model'

const creatStudentIntoDb = async (studentData: TStudent) => {
  if (await Student.isUserExists(studentData.id)) {
    throw new Error(' User Already Exists ')
  }
  // Jeheu database use kortesi mogodb jetar model hocche Student tai student niye aschi
  const result = await Student.create(studentData) // moongoose built in

  // same jinis instance method use kore

  // const student = new Student(studentData) // Creating an instance

  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error(' User Already Exists ')
  // }

  //const result = await student.save() // built in instance method

  return result
}

const getAllStudentsFromDbB = async () => {
  const result = await Student.find()
  return result
}

const getSingleStudent = async (id: string) => {
  const result = await Student.findOne({ id })
  return result
}

// Controller theke jeno call dite pari!!
export const StudentServices = {
  creatStudentIntoDb,
  getAllStudentsFromDbB,
  getSingleStudent,
}
