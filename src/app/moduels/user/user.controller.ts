import { NextFunction, Request, RequestHandler, Response } from 'express'
import { UserService } from './user.services'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'

// RequestHandler :  req: Request,
//res: Response,
//next: NextFunction, Eita kore dicche
const createStudent: RequestHandler = async (req, res, next) => {
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
