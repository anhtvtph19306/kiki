import express from "express";
import { checkAdminAuthorization, veryfiletoken } from "../middlewares/authorization.js";
import sizeController from "../modules/size/Controller/index.js";

const router = express.Router()
router.get('/', sizeController.getAllSize)
router.get('/:id', sizeController.getOneSize)
router.use(veryfiletoken)
router.use(checkAdminAuthorization)
router.post('/add', sizeController.addSizes)
router.delete('/:id', sizeController.deleteSizes)
router.put('/edit/:id', sizeController.editSize)


export default router