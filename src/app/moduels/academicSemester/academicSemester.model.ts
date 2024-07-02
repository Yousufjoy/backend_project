import { Schema, model } from 'mongoose'
import {
  TAcademicSemester,
  TAcademicSemesterCode,
  TAcademicSemesterName,
  TMonths,
} from './academicSemester.interface'

const Months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const AcademicSemesterName: TAcademicSemesterName[] = [
  'Autumn',
  'Summar',
  'Fall',
]
const AcademicSemesterCode: TAcademicSemesterCode[] = ['01', '02', '03']
// const AcademicSemesterCode: TAcademicSemesterCode = ['Autumn', 'Summar', 'Fall']

const AcademicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    required: true,
    enum: AcademicSemesterName,
  },
  year: {
    type: Date,
    required: true,
  },
  code: {
    type: String,
    required: true,
    enum: AcademicSemesterCode,
  },
  startMonth: {
    type: String,
    required: true,
    enum: Months,
  },
  endMonth: {
    type: String,
    required: true,
    enum: Months,
  },
})

export const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  AcademicSemesterSchema,
)
