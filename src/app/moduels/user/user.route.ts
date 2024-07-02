import express, { NextFunction, Request, Response } from 'express'
import { userControllers } from './user.controller'

// Express er function call kore router namer ekta object niye ashbo

const shenaBahini = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body)
  next()
}

const router = express.Router()

router.post('/create-student', shenaBahini, userControllers.createStudent)

export const UserRoutes = router
