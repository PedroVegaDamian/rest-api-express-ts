import 'dotenv/config'
import { sign, verify } from 'jsonwebtoken'

const JWT_SECRET = <string>process.env.JWT_SECRET

export const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: '2h'
  })
  return jwt
}

export const verifyToken = (jwt: string) => {
  const isOK = verify(jwt, JWT_SECRET)
  return isOK
}
