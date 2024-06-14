import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { StudentRouts } from './app/moduels/student/student.route'
const app: Application = express()

//parsers

app.use(express.json())
app.use(cors())


//api/v1/students/create-student
//application routs
app.use('/api/v1/students', StudentRouts)

app.get('/', (req: Request, res: Response) => {
  let a = 22
  res.send(a)
})

console.log(process.cwd())

export default app
