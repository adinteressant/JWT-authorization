import { Outlet } from 'react-router-dom'
import { AuthContextProvider } from './authContext'
import { UserContextProvider } from './userContext'
function App() {
  return <div>
  <AuthContextProvider>
  <UserContextProvider>
  <Outlet/>
  </UserContextProvider>
  </AuthContextProvider>
  </div>
}

export default App
