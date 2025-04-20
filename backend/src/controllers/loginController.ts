import type { Request,Response } from 'express'

const loginController = (req:Request,res:Response):Response => { 
  const {userId,username} = req.findUser
  return res.status(200).json({
    userId,
    username,
    message:'login successful'
  })
}

export default loginController
