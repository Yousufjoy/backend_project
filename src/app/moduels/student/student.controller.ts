import { Request, Response } from 'express'
import { StudentServices } from './student.service'
import { z } from 'zod'
import studentValidationSchema from '../student.validation.zod'

// import studentSchema from './student.validation'

// Amra keno controller e keno kortesi model e na?: Karon joi nijei ekta schema r amader data gulo ashtese controller theke client pathacche controller maddhome recieve hocche

//Handle korbe application logic, sudhu request/response handle korbe kivabe ashtese data mongodb/prisma etc eita dekhar bishoy na oita korbe service

const createStudent = async (req: Request, res: Response) => {
  try {
    // const student = req.body.student
    const { student: studentData } = req.body

    // Data validation using zod

    const zodParseData = studentValidationSchema.parse(studentData)

    // data validation using Joi
    // const { error, value } = studentSchema.validate(studentData)

    //will call service function to send this data
    const result = await StudentServices.creatStudentIntoDb(zodParseData)
    //User k : send response
    res.status(200).json({
      success: true,
      message: 'Student is created successfully!',
      data: result,
    })
  } catch (err: any) {
    {
      res.status(500).json({
        success: false,
        message: err.message || 'Somethig went wrong',
        error: err,
      })
    }
  }
}

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDbB()
    res.status(200).json({
      success: true,
      message: 'Students are retrived successfully',
      data: result,
    })
  } catch (err) {
    {
      res.status(500).json({
        success: false,
        message: 'Somethig went wrong',
        error: err,
      })
    }
  }
}

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    const result = await StudentServices.deleteStudentFromDB(studentId)
   
    res.status(200).json({
      success: true,
      message: 'Student deleted successfully',
      data: result,
    })
  } catch (err) {
    {
      res.status(500).json({
        success: false,
        message: 'Somethig went wrong',
        error: err,
      })
    }
  }
}

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    console.log(studentId)
    const result = StudentServices.getSingleStudent(studentId)

    res.status(200).json({
      success: true,
      message: 'Student Found!!!',
      data: result,
    })
  } catch (err) {
    {
      res.status(500).json({
        success: false,
        message: 'Somethig went wrong',
        error: err,
      })
    }
  }
}

// Controller k export korte hobe jeno route etake use korte pare

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  deleteStudent,
}
