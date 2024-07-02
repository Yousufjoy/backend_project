import express, { NextFunction, Request, Response } from 'express'
import { AcademicSemesterControllers } from './academicSemester.controller'

const router = express.Router()

router.post(
  '/create-academic-semester',
  AcademicSemesterControllers.createAcademicSemester,
)

export const AcademicSemesterRoutes = router
