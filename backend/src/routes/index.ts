import { Router } from 'express'
import loginRouter from './loginRoute.ts'
const router = Router()

router.use(loginRouter)

export default router
