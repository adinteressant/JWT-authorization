import { createContext, useEffect } from 'react'
import { useState } from 'react'

type logInContext={
  isLoggedIn:boolean,
  setIsLoggedIn:React.Dispatch<React.SetStateAction<boolean>>
}
export const AuthContext = createContext<logInContext|null>(null)

export const AuthContextProvider = ({children}:{children:React.ReactNode}) => {
  useEffect(()=>{
    const getAuth = async ():Promise<void> => {
      try{
        const response = await fetch('/api/auth')
        const data = await response.json()
        setIsLoggedIn(data.isAuthenticated)

      }catch(err){
        console.log(err)
      } 
    }
    getAuth()
  },[])
  const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false)
  return <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
    {children} 
  </AuthContext.Provider>

}
