import { createContext, useState,useEffect } from 'react'

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
useEffect(()=>{
    const getAuth = async ():Promise<void> => {
      try{
        const response = await fetch('/api/auth')
        const data = await response.json()
        if(data.isAuthenticated){
          setUser({
            userId:data.userId,
            username:data.username
          }) 
        }

      }catch(err){
        console.log(err)
      } 
    }
    getAuth()
  },[])
  const userId = ''
  const username = ''
  const [user,setUser] = useState<UserInfo>({userId,username}) 
  return <UserContext.Provider value={{user,setUser}}>
  {children}
  </UserContext.Provider> 

}
