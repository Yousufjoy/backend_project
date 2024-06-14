import { Request, Response } from 'express'
import { StudentServices } from './student.service'


//Handle korbe application logic, sudhu request/response handle korbe kivabe ashtese data mongodb/prisma etc eita dekhar bishoy na oita korbe service

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body

    //will call service function to send this data
    const result = await StudentServices.creatStudentIntoDb(student)
    //User k : send response

    res.status(200).json({
      success: true,
      message: 'Student is created successfully!',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

// Controller k export korte hobe jeno route etake use korte pare

export const StudentControllers = {
  createStudent,
}
