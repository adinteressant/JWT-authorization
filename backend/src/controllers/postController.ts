import type {Request,Response} from 'express'
import posts from '../posts.ts'
const postController = (req:Request,res:Response):Response => {
  const {userId,username} = req.findUser
  const findPost = posts.find(userPost => userPost.userId===userId && userPost.username===username)
  if(!findPost){
    return res.status(404).json({message:'post not found'})
  }
  return res.status(200).json({
    message:'post found',
    userId:findPost.userId,
    username:findPost.username,
    post:findPost.post
  })
}

export default postController
