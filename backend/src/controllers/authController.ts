import type { Request,Response } from 'express'

const authController = (req:Request,res:Response):Response => {
  if(req.findUser){
    return res.status(200).json({
      isAuthenticated:true,
      userId:req.findUser.userId,
      username:req.findUser.username 
    })
  }   
  return res.status(401).json({isAuthenticated:false})
}

export default authController
