import { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodError } from 'zod';

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // validation
      // If everything is all right, next() -> Go to controller
      await schema.parseAsync({
        body: req.body,
      });
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({
          success: false,
          message: err.errors.map(e => e.message).join(', '),
          error: err.errors
        });
      }
      next(err);
    }
  };
};

export default validateRequest;
