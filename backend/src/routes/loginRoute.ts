import { Router } from 'express'
import type { Request,Response } from 'express'
import loginController from '../controllers/loginController.ts'
import loginMiddleware from '../middlewares/loginMiddleware.ts'
import authenticateJWT from '../middlewares/authenticateJWT.ts'
import authController from '../controllers/authController.ts'

const router = Router()

router.post('/api/login',loginMiddleware,loginController)
router.get('/api/auth',authenticateJWT,authController)

router.get('/api/logout',(req:Request,res:Response):Response => {
  res.clearCookie('ACCESS_TOKEN')
  res.clearCookie('REFRESH_TOKEN')
  return res.sendStatus(200)
})
export default router
