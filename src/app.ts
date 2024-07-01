import express, { Application, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import notFound from './app/middlewares/notFound'
import router from './app/routes'

const app: Application = express()

//parsers

app.use(express.json())
app.use(cors())

// The Main route
app.use('/api/v1', router)

//For testing
app.get('/', (req: Request, res: Response) => {})


//Handlig error
app.use(globalErrorHandler)

// Not Found
app.use(notFound)

export default app
