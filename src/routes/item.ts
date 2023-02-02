import { Router } from 'express'
import {
  getItems,
  getItem,
  postItem,
  updateItem,
  deleteItem
} from '../controllers/item'
import { logMiddleware } from '../middlewares/log'

export const router = Router()

router.get('/', logMiddleware, getItems)
router.get('/:id', getItem)
router.post('/', postItem)
router.put('/:id', updateItem)
router.delete('/:id', deleteItem)
