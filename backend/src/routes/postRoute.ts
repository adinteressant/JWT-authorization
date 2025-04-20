import { Router } from 'express'
import postController from '../controllers/postController.ts'
import authenticateJWT from '../middlewares/authenticateJWT.ts'
const router = Router()

router.get('/api/posts',authenticateJWT,postController)

export default router
