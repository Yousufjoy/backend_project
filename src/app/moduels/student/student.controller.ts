import { NextFunction, Request, RequestHandler, Response } from 'express'
import { StudentServices } from './student.service'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'

// Amra keno controller e keno kortesi? model e na?: Karon joi nijei ekta schema r amader data gulo ashtese controller theke client pathacche controller maddhome recieve hocche

//Handle korbe application logic, sudhu request/response handle korbe kivabe ashtese data mongodb/prisma etc eita dekhar bishoy na oita korbe service

const catchAsync = (fn: RequestHandler) => {
  // We know higher order function parameter hisebe ekta function receive kore
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err))
  }
}

const getAllStudents = catchAsync(async (req, res, next) => {
  const result = await StudentServices.getAllStudentsFromDbB()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Students Retrieved Successfully',
    data: result,
  })
})

const deleteStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params
  const result = await StudentServices.deleteStudentFromDB(studentId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Deleted Successfully',
    data: result,
  })
})

const getSingleStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params

  const result = await StudentServices.getSingleStudent(studentId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Student data retrieved Successfully',
    data: result,
  })
})
export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
}
