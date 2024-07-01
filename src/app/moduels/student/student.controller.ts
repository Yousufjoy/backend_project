import { Request, Response } from 'express'
import { StudentServices } from './student.service'

// import studentValidationSchema from './student.validation.zod'

// import studentSchema from './student.validation'

// Amra keno controller e keno kortesi model e na?: Karon joi nijei ekta schema r amader data gulo ashtese controller theke client pathacche controller maddhome recieve hocche

//Handle korbe application logic, sudhu request/response handle korbe kivabe ashtese data mongodb/prisma etc eita dekhar bishoy na oita korbe service

// const product = req.body.product;
// const zodParsedData = productSchema.parse(product);
// // will call service func to send this data
// const result = await ProductServices.createProductIntoDB(zodParsedData);
// // send response

// const createStudent = async (req: Request, res: Response) => {
//   try {
//     const studentData = req.body.data

//     const result = await StudentServices.creatStudentIntoDb(studentData)

//     res.status(200).json({
//       success: true,
//       message: 'Student is created successfully!',
//       data: result,
//     })
//   } catch (err: any) {
//     {
//       res.status(500).json({
//         success: false,
//         message: err.message || 'Somethig went wrong',
//         error: err,
//       })
//     }
//   }
// }

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
    // console.log(studentId)
    const result = await StudentServices.getSingleStudent(studentId)

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
  // createStudent,
  getAllStudents,
  getSingleStudent,
  deleteStudent,
}
