import jwt from 'jsonwebtoken'


export const generateToken = (userId:string,username:string):string => {
  const payload = {
    userId,
    username
  }
  const token = jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'10m'})

  return token
}

export const generateRefreshToken = (userId:string,username:string):string => {
  const payload = {
    userId,
    username
  }
  const refreshToken = jwt.sign(payload,process.env.REFRESH_TOKEN_SECRET,{expiresIn:'1d'})

  return refreshToken
}

