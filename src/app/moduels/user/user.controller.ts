import { NextFunction, Request, Response } from 'express'
import { UserService } from './user.services'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: StudentData } = req.body
    const result = await UserService.createStudentIntoDB(password, StudentData)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: result,
    })
  } catch (err: any) {
    {
      next(err)
    }
  }
}

export const userControllers = {
  createStudent,
}
