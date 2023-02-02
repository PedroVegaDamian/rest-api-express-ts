import { NextFunction, Request, Response } from 'express'
import { JwtPayload } from 'jsonwebtoken'
import { verifyToken } from '../utils/jwt.handle'

export interface RequestExtends extends Request {
  user?: string | JwtPayload
}

export const checkJwt = (
  req: RequestExtends,
  res: Response,
  next: NextFunction
) => {
  try {
    const jwtByUser = req.headers.authorization || null
    const jwt = jwtByUser?.split(' ').pop()
    const isUser = verifyToken(`${jwt}`)
    if (!isUser) {
      res.status(401).send('NO_TIENES_UN_JWT_VÁLIDO')
    } else {
      req.user = isUser
      console.log({ jwtByUser })
      next()
    }
  } catch (error) {
    res.status(400).send('SESSION_NO_VÁLIDA')
  }
}
