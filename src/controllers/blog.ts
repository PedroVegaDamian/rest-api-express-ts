import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'

export const getBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, 'ERROR_GET_BLOG')
  }
}

export const getBlogs = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, 'ERROR_GET_BLOGS')
  }
}

export const updateBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_BLOG')
  }
}

export const postBlog = (req: Request, res: Response) => {
  try {
    res.send({ body: req.body })
  } catch (error) {
    handleHttp(res, 'ERROR_POST_BLOG')
  }
}

export const deleteBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_BLOG')
  }
}
