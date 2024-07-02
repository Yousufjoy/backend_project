import express, { NextFunction, Request, Response } from 'express'
import { userControllers } from './user.controller'

import { createstudentValidationSchema } from '../student/student.validation.zod'
import validateRequest from '../../middlewares/validateRequest'

const router = express.Router()

router.post(
  '/create-student',
  validateRequest(createstudentValidationSchema),
  userControllers.createStudent,
)

export const UserRoutes = router
