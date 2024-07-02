import { z } from 'zod'

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Name must be a string',
    })
    .min(1, 'Password is required')
    .optional(),
})

export const userValidation = {
  userValidationSchema,
}