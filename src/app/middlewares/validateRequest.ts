// Express er function call kore router namer ekta object niye ashbo

import { Request, Response, NextFunction } from 'express'
import { AnyZodObject } from 'zod'

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // validation
      // If everything allright next() -> Go to controller
      await schema.parseAsync({
        body: req.body,
      })

      next()
    } catch (err) {
      next(err)
    }
  }
}

export default validateRequest
