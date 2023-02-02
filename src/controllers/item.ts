import { Request, Response } from 'express'
import {
  insertCar,
  getCars,
  getCar,
  updateCar,
  deleteCar
} from '../services/item'
import { handleHttp } from '../utils/error.handle'

export const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const response = await getCar(id)
    res.send(response)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEM')
  }
}

export const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars()
    res.send(response)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEMS')
  }
}

export const updateItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const response = await updateCar(id, req.body)
    res.send(response)
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_ITEM')
  }
}

export const postItem = async (req: Request, res: Response) => {
  try {
    const responseItem = await insertCar(req.body)
    res.send(responseItem)
  } catch (error) {
    handleHttp(res, 'ERROR_POST_ITEM', error)
  }
}

export const deleteItem = async (req: Request, res: Response) => {
  const responseItem = await deleteCar(req.params.id)
  res.send(responseItem)
  try {
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_ITEM')
  }
}
