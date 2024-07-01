import express from 'express'
import { userControllers } from './user.controller'

// Express er function call kore router namer ekta object niye ashbo

const router = express.Router()

router.post('/create-student', userControllers.createStudent)

export const UserRoutes = router
