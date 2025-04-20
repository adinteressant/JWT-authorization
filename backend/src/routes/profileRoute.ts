import { Router } from 'express'

const router = Router()

router.get('/api/get-profile',(req,res)=>{
  res.send('profile')
})

export default router
