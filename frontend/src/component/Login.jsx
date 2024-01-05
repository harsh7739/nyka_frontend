// import { useState } from "react"

// function Login(){
//     const [email,setEmail]=useState("")
//     const [password,setPassword]=useState("")

//     async function handleSubmit(e){
//         e.preventDefault()
//            let obj={email,password}
//         try {
//             let res= await fetch("http://localhost:8080/api/users/login",{
//                 method:"POST",
//                 headers:{
//                     "Content-Type":"application/json"
//                 },
//                 body:JSON.stringify(obj)
//             })
//             res=await res.json()
//             console.log(res)
//         } catch (error) {
//             console.log(error)
//         }
//     }


//     return (
//         <>
//         <h1>Login Page</h1>
//         <form onSubmit={handleSubmit}>
//             <input type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} />
//             <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} />
//             <input type="submit" value={"Submit"} />
//         </form>
//         </>
//     )
// }
// export default Login


import React, { useState } from "react";
import axios from "axios"
// import { loginFun, loginRequestAction, loginRequestSuccess, loginRquestFailure } from "../Redux/AuthReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginFun } from "../redux/authRedux/action";

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const isAuth = useSelector((store)=>store.AuthReducer.isAuth)
  const handleSubmit = (e)=>{
    e.preventDefault()
    const obj = {email,password}
    dispatch(loginFun(obj)).then((res)=>{
        
      navigate(location.state,{replace:true})
    })
    
  }
  if(isAuth){
    navigate("/dashboard")
  }else{
    navigate("/login")
  }
  
  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input data-testid="login-email" type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-testid="login-password" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type="submit" data-testid="login-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;