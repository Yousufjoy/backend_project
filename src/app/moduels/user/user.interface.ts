export type TUser = {
  id: String
  password: String
  needsPasswordChange: boolean
  role: 'admin' | 'student' | 'faculty'
  status: 'in-progress' | 'blocked'
  isDeleted: boolean
  createdAt: Date
  deletedAt: Date
}

