import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'
import { RequestExtends } from '../middlewares/session'

export const getItems = (req: RequestExtends, res: Response) => {
  try {
    res.send({
      data: 'Esto solo lo ven las personas con session / JWT',
      user: req.user
    })
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEMS')
  }
}
