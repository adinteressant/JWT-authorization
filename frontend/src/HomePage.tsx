import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './authContext'
import { Link } from 'react-router-dom'
import { UserContext } from './userContext'
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
  const {isLoggedIn} = useContext(AuthContext)
  const {user} = useContext(UserContext)
  if(isLoggedIn){
  return <div>welcome {user.username}

  <div>
  {post}
  </div>
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
