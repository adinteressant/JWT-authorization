type User = {
  userId:string,
  username:string
}

declare global{
  namespace Express{
    interface Request{
      findUser?: User 
    }
  }
}
