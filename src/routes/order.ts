import { Router } from 'express'
import { getItems } from '../controllers/order'
import { checkJwt } from '../middlewares/session'

export const router = Router()

// Esta ruta solo puede acceder las personas que tienen una session activa!
// que tengan un JWT válido
router.get('/', checkJwt, getItems)
