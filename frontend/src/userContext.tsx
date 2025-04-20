import { createContext, useState } from 'react'

type UserInfo={
  userId:string,
  username:string
}
type User = {
  user:UserInfo,
  setUser:React.Dispatch<React.SetStateAction<UserInfo>>

}
export const UserContext = createContext<User|null>(null)

export const UserContextProvider = ({children}:{children:React.ReactNode}) => {
  const [user,setUser] = useState<UserInfo>({userId:'',username:''}) 
  return <UserContext.Provider value={{user,setUser}}>
  {children}
  </UserContext.Provider> 

}
