import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './authContext'
import { Link } from 'react-router-dom'
import { UserContext } from './userContext'
import { useNavigate } from 'react-router-dom'
const HomePage = () => {
  const [post,setPost] = useState<string>('')
  useEffect(()=>{
    const fetchPosts = async ():Promise<void> => {
      try{
        const response = await fetch(`/api/posts`)
        const data = await response.json()
        setPost(data.post) 
      }
      catch(err){
        console.log(err)
      }
    }
    fetchPosts()
  },[])

  const navigate = useNavigate()
  const handleLogout = async ():Promise<void> => {
    await fetch('/api/logout')
    setIsLoggedIn(false)
    setUser({userId:'',username:''})
    navigate('/login')
  }

  const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext)
  const {user,setUser} = useContext(UserContext)
  if(isLoggedIn){
  return <div>welcome {user.username}

  <div>
  {post}
  </div>
  <div>
    <button onClick={handleLogout}>
      logout
    </button> 
    
  </div>
  </div>
  }
  return <div>You need to <Link to={'/login'}>login</Link></div>
}

export default HomePage
