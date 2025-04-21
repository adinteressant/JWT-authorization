import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './authContext'
import { UserContext } from './userContext'
const LoginPage = () => {
  type FormData = {
  username:string,
  password:string
}
  const navigate = useNavigate()
  const authContext = useContext(AuthContext)
  const userContext = useContext(UserContext)
  const [msg,setMsg] = useState<string>('')
  const [formData,setFormData] = useState<FormData>({username:'',password:''})
  const {setIsLoggedIn} = authContext
  const {setUser} = userContext
  const checkLogin = async ():Promise<void> => {
  try{
    const response = await fetch(`/api/login`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        username:formData.username,
        password:formData.password
      })
    })
    const data = await response.json()
    if(data.login){
      setIsLoggedIn(true)
      // localStorage.setItem('isAuthenticated','true')
      setUser({userId:data.userId,username:data.username})
      // localStorage.setItem('userId',data.userId)
      // localStorage.setItem('username',data.username)

      setMsg('')
      navigate('/home')
    }else{
      setIsLoggedIn(false)
      setMsg('login failed')
    }
    return
  }
  catch(err){
    console.log(err)
  }
}

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
    const { name,value } = e.target
    setFormData(prev => ({...prev,[name]:value}))
  }
  const handleLogin = (e:React.FormEvent<HTMLFormElement>):void=>{
    e.preventDefault()
    checkLogin()
    return
  }
  return <div style={{display:'flex',height:'100vh',width:'100%',justifyContent:'center',alignItems:'center'}}> 
    <form style={{display:'flex',flexDirection:'column', gap:'10px',border:'black 1px solid',
    padding:'10px',width:'200px'}} onSubmit={handleLogin}>
      <div>
        <input type="text" placeholder="username" name="username" value={formData.username}
        onChange={handleChange} required/>
      </div>
      <div>
        <input type="password" 
        onChange={handleChange} placeholder="password" name="password" value={formData.password} required/>
      </div>
      <div><button>
        submit
      </button></div>
      <div>{msg}</div>
    </form>
    </div>
}

export default LoginPage
