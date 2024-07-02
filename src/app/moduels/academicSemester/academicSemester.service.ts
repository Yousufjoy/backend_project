import { TAcademicSemester } from './academicSemester.interface'
import { AcademicSemester } from './academicSemester.model'

type TcreateAcademicSemesterIntoDB = {
  [key: string]: string
}

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  // Semester name --> semester code


  //Invalid Semester Code Logic, autmn,summar etc should be mapped code other code will be wrong
  const academicSemesterNameCodeMapper: TcreateAcademicSemesterIntoDB = {
    Autumn: '01',
    Summar: '02',
    Fall: '03',
  }

  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code!!')
  } else {
    const result = await AcademicSemester.create(payload)
    return result
  }
}

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
}
