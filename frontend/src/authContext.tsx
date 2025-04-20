import { createContext } from 'react'
import { useState } from 'react'

type logInContext={
  isLoggedIn:boolean,
  setIsLoggedIn:React.Dispatch<React.SetStateAction<boolean>>
}
export const AuthContext = createContext<logInContext|null>(null)

export const AuthContextProvider = ({children}:{children:React.ReactNode}) => {
  const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false)
  return <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
    {children} 
  </AuthContext.Provider>

}
