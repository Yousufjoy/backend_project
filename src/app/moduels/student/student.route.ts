import express, { Request } from 'express'
import { StudentControllers } from './student.controller'

// Express er function call kore router namer ekta object niye ashbo

const router = express.Router()

// router object er upor vitti kore get/post/patch/delte etc korbo

//will call controller function
router.post('/create-student', StudentControllers.createStudent)
