import { NextFunction, Request, Response } from 'express'
import { StudentServices } from './student.service'

// Amra keno controller e keno kortesi? model e na?: Karon joi nijei ekta schema r amader data gulo ashtese controller theke client pathacche controller maddhome recieve hocche

//Handle korbe application logic, sudhu request/response handle korbe kivabe ashtese data mongodb/prisma etc eita dekhar bishoy na oita korbe service

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentsFromDbB()
    res.status(200).json({
      success: true,
      message: 'Students are retrived successfully',
      data: result,
    })
  } catch (err) {
    {
      next(err)
    }
  }
}

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params
    const result = await StudentServices.deleteStudentFromDB(studentId)

    res.status(200).json({
      success: true,
      message: 'Student deleted successfully',
      data: result,
    })
  } catch (err) {
    {
      next(err)
    }
  }
}

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params
    // console.log(studentId)
    const result = await StudentServices.getSingleStudent(studentId)

    res.status(200).json({
      success: true,
      message: 'Student Found!!!',
      data: result,
    })
  } catch (err) {
    {
      next(err)
    }
  }
}

export const StudentControllers = {
  // createStudent,
  getAllStudents,
  getSingleStudent,
  deleteStudent,
}
