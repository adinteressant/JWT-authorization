import type { Request,Response,NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { generateToken } from '../utils/generateToken.ts'

type User = {
  userId:string,
  username:string
}
const authenticateJWT = (req:Request,res:Response,next:NextFunction):Response|NextFunction|void => {
  

  const accessToken = req.cookies.ACCESS_TOKEN
  const refreshToken = req.cookies.REFRESH_TOKEN

  if(!accessToken){
    return res.status(401).json({message:'not authorized',authorized:false})
  }

  jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET,(err,findUser:User)=>{
    if(err){
      if(err.name === 'TokenExpiredError'){
        jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET,(err,findUser:User)=>{
          if(!err){
            const newAccessToken = generateToken(findUser.userId,findUser.username)
            res.clearCookie('ACCESS_TOKEN')
            res.cookie('ACCESS_TOKEN',newAccessToken,{httpOnly:true})
            console.log('new token set')
            req.findUser = findUser
            return next()
          }
          else{
            res.clearCookie('ACCESS_TOKEN')
            res.clearCookie('REFRESH_TOKEN')
            return res.status(403).json({message:'not authorized',authorized:false})
          }
        })
      }
      else{
        return res.status(403).json({message:'not authorized',authorized:false}) 
      }
    }
    else{
      req.findUser = findUser 
    }
  })

  next()
}

export default authenticateJWT
