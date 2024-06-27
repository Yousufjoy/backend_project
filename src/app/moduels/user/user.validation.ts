import { z } from 'zod'

const userSchemaZod = z.object({
  id: z.string().min(1, 'ID is required'),
  password: z.string().min(1, 'Password is required'),
  needsPasswordChange: z.boolean().optional().default(true),
  role: z.enum(['admin', 'student', 'faculty']),
  status: z.enum(['in-progress', 'blocked']),
  isDeleted: z.boolean().optional(),
})

export default userSchemaZod
