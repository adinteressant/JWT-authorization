import { Router } from 'express'
import loginController from '../controllers/loginController.ts'
import loginMiddleware from '../middlewares/loginMiddleware.ts'

const router = Router()

router.post('/api/login',loginMiddleware,loginController)

export default router
