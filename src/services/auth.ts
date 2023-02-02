import { Auht } from '../interfaces/auth.interface'
import { User } from '../interfaces/user.interface'
import { UserModel } from '../models/user'
import { encrypt, verified } from '../utils/bcrypt.handle'
import { generateToken } from '../utils/jwt.handle'

export const registerNewUser = async ({ email, password, name }: User) => {
  const checkIs = await UserModel.findOne({ email })
  if (checkIs) return 'ALREDY_USER'

  const passwordHash = await encrypt(password)
  const registerNewUser = await UserModel.create({
    email,
    password: passwordHash,
    name
  })
  return registerNewUser
}

export const loginUser = async ({ email, password }: Auht) => {
  const checkIs = await UserModel.findOne({ email })
  if (!checkIs) return 'NOT_FOUND_USER'

  const passwordHash = checkIs.password
  const isCorrect = await verified(password, passwordHash)

  if (!isCorrect) return 'PASSWORD_INCORRECT'

  const token = generateToken(checkIs.email)

  const data = {
    token,
    user: checkIs
  }

  return data
}
