import { UserService } from './user.services'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'

const createStudent = catchAsync(async (req, res, next) => {
  const { password, student: StudentData } = req.body
  const result = await UserService.createStudentIntoDB(password, StudentData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result,
  })
})

export const userControllers = {
  createStudent,
}