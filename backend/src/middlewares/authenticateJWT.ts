import type { Request,Response,NextFunction } from 'express'
import users from '../users.ts'
const authenticateJWT = (req:Request,res:Response,next:NextFunction):Response|void => {
  const {username,password} = req.body

  const findUser = users.find(user => user.username===username && user.password===password)
  if(!findUser){
    return res.status(401).json({message:'login failed'})
  }

  next()
}

export default authenticateJWT
