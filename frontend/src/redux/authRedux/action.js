import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"


export const loginFun = (obj)=>(dispatch)=>{
    // dispatch(loginRequestAction())
    dispatch({type:LOGIN_REQUEST})
    
    return axios.post("https://nyka-j1r0.onrender.com/api/users/login",obj)
    .then((res)=>{
        console.log(res.data)
    //   dispatch(loginRequestSuccess(res.data))
    dispatch({type:LOGIN_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
    //  dispatch(loginRquestFailure())
     dispatch({type:LOGIN_FAILURE})
    })
  }


  export const registerFun=(obj)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
            axios.post("https://nyka-j1r0.onrender.com/api/users/register",obj)
           .then((res)=>{
            console.log(res.data)
           })
           .catch((err)=>{
            dispatch({type:LOGIN_FAILURE})
           })
  }