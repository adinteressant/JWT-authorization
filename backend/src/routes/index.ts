import { Router } from 'express'
import loginRouter from './loginRoute.ts'
import postRouter from './postRoute.ts'
const router = Router()

router.use(loginRouter)
router.use(postRouter)
export default router
