import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './authContext'
const LoginPage = () => {
  const navigate = useNavigate()
  const authContext = useContext(AuthContext)
  const [msg,setMsg] = useState<string>('')
  const {isLoggedIn,setIsLoggedIn} = authContext
  const checkLogin = async ():Promise<void> => {
    // setIsLoggedIn(true)
  }
  const handleLogin = (e:React.FormEvent<HTMLFormElement>):void=>{
    e.preventDefault()
    checkLogin()
    if(isLoggedIn){
      setMsg('')
      navigate('/home')
      return 
    }
    setMsg('login failed')
    return
  }
  return <div style={{display:'flex',height:'100vh',width:'100%',justifyContent:'center',alignItems:'center'}}> 
    <form style={{display:'flex',flexDirection:'column', gap:'10px',border:'black 1px solid',
    padding:'10px',width:'200px'}} onSubmit={handleLogin}>
      <div>
        <input type="text" placeholder="username" required/>
      </div>
      <div>
        <input type="password" placeholder="password" required/>
      </div>
      <div><button>
        submit
      </button></div>
      <div style={{color:'white'}}>{msg}</div>
    </form>
    </div>
}

export default LoginPage
