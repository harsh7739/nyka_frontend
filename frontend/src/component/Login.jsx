
import React, { useState } from "react";
import { Input,Stack,InputGroup,InputRightElement,Button,Text } from '@chakra-ui/react'
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginFun } from "../redux/authRedux/action";
import { ViewOffIcon,ViewIcon } from '@chakra-ui/icons'


const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const isAuth = useSelector((store)=>store.AuthReducer.isAuth)
  const handleSubmit = (e)=>{
    // e.preventDefault()
    const obj = {email,password}
    dispatch(loginFun(obj))
    // .then((res)=>{
        
    //   navigate(location.state,{replace:true})
    // })
    
  }
  if(isAuth){
    navigate("/dashboard")
  }


  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  
  return (
    // <div>
    //   <h2>LOGIN</h2>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label>User Email</label>
    //       <br />
    //       <input data-testid="login-email" type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    //     </div>
    //     <div>
    //       <label>User Password</label>
    //       <br />
    //       <input data-testid="login-password" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    //     </div>
    //     <button type="submit" data-testid="login-submit">
    //       Submit
    //     </button>
    //   </form>
    // </div>


//     <Stack spacing={3}>
//   <Input placeholder='extra small size' size='md' />
//   <Input placeholder='small size' size='md' />
//   <Input placeholder='medium size' size='md' />
//   <Input placeholder='large size' size='md' />
// </Stack>

<>
<Stack spacing={3} w="40%" m="auto" >
<label>User Email</label>
<Input
  pr='4.5rem'
  type="email"
  placeholder='Enter Email'
  value={email}
  onChange={(e)=>setEmail(e.target.value)}
/>

<InputGroup size='md'>



<Input
  pr='4.5rem'
  type={show ? 'text' : 'password'}
  placeholder='Enter password'
  value={password}
  onChange={(e)=>setPassword(e.target.value)}
/>
<InputRightElement width='4.5rem'>
  <Button h='1.75rem' size='sm' onClick={handleClick}>
    {show ?  <ViewOffIcon />:<ViewIcon />}
  </Button>
</InputRightElement>

</InputGroup>
<Button onClick={handleSubmit}>Login</Button>
<Text >If first time ?
  <Link to="/register">
  <span style={{color:"blue"}}> create account</span> 
  </Link>
  </Text>
</Stack>
</>
  );
};

export default Login;