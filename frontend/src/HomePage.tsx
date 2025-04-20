import { useContext } from 'react'
import { AuthContext } from './authContext'
import { Link } from 'react-router-dom'
import { UserContext } from './userContext'
const HomePage = () => {
const {isLoggedIn} = useContext(AuthContext)
const {user} = useContext(UserContext)
  if(isLoggedIn){
  return <div>welcome {user.username}
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
