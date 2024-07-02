// index.ts keno? karon amra route e access korle by default index.ts root e chole jacchi

import { Router } from 'express'
import { StudentRouts } from '../moduels/student/student.route'
import { UserRoutes } from '../moduels/user/user.route'
import { AcademicSemesterRoutes } from '../moduels/academicSemester/academicSemester.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRouts,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router