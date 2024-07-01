import express, { Application, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import { UserRoutes } from './app/moduels/user/user.route'
import { StudentRouts } from './app/moduels/student/student.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'

const app: Application = express()

//parsers

app.use(express.json())
app.use(cors())

app.use('/api/v1/students', StudentRouts)
app.use('/api/v1/users', UserRoutes)

app.get('/', (req: Request, res: Response) => {})

app.use(globalErrorHandler)

export default app
