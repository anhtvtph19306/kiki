import express from 'express'
import controllerOrder from '../modules/Order/controller/index.js'

const router = express.Router()
router.post('/add', controllerOrder.addOrders)
export default router