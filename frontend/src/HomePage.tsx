import { useContext } from 'react'
import { AuthContext } from './authContext'
import { Link } from 'react-router-dom'
const HomePage = () => {
const {isLoggedIn} = useContext(AuthContext)
  if(isLoggedIn){
  return <div>welcome
  <div>
  <Link to={'/login'}>
    logout
    </Link>
  </div>
  </div>
  }
  return <div>You need to <Link to={'/login'}>login</Link></div>
}

export default HomePage
