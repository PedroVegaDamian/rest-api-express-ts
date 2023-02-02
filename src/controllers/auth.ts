import { Request, Response } from 'express'
import { registerNewUser, loginUser } from '../services/auth'

export const registerController = async (req: Request, res: Response) => {
  const responseUser = await registerNewUser(req.body)
  res.send(responseUser)
}
export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const responseUser = await loginUser({ email, password })

  if (responseUser === 'PASSWORD_INCORRECT') {
    res.status(403)
  }

  res.send(responseUser)
}
