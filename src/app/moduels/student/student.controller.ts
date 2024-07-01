import { NextFunction, Request, Response } from 'express'
import { StudentServices } from './student.service'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'

// Amra keno controller e keno kortesi? model e na?: Karon joi nijei ekta schema r amader data gulo ashtese controller theke client pathacche controller maddhome recieve hocche

//Handle korbe application logic, sudhu request/response handle korbe kivabe ashtese data mongodb/prisma etc eita dekhar bishoy na oita korbe service

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentsFromDbB()
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Students Retrieved Successfully',
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

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student Deleted Successfully',
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

    const result = await StudentServices.getSingleStudent(studentId)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single Student data retrieved Successfully',
      data: result,
    })
  } catch (err) {
    {
      next(err)
    }
  }
}

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
}
