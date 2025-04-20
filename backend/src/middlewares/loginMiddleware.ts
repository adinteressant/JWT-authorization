import type { Request,Response,NextFunction } from 'express'
import users from '../users.ts'
import { generateRefreshToken, generateToken } from '../utils/generateToken.ts'
const loginMiddleware = (req:Request,res:Response,next:NextFunction):void|Response => {
  const {username,password} = req.body

  const findUser = users.find(user => user.username===username && user.password===password)
  if(!findUser) return res.status(401).json({message:'user not found'})
  
  const accessToken = generateToken(findUser.userId,findUser.username)
  const refreshToken = generateRefreshToken(findUser.userId,findUser.username)

  res.cookie('ACCESS_TOKEN',accessToken,{httpOnly:true})
  res.cookie('REFRESH_TOKEN',refreshToken,{httpOnly:true})
  
  req.findUser = findUser
  next()
}

export default loginMiddleware
