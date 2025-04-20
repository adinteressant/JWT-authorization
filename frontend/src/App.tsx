import { Outlet } from 'react-router-dom'
import { AuthContextProvider } from './authContext'
import { UserContextProvider } from './userContext'
function App() {
  return <div style={{backgroundColor:'#212121',position:'fixed',top:'0',left:'0',right:'0',bottom:'0'}}>
  <AuthContextProvider>
  <UserContextProvider>
  <Outlet/>
  </UserContextProvider>
  </AuthContextProvider>
  </div>
}

export default App
