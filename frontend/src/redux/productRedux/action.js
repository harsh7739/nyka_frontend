import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionType"
import axios from "axios"




export const getProductAction =(params)=>(dispatch)=>{
    dispatch({type:GET_PRODUCT_REQUEST})
    axios.get("https://nyka-j1r0.onrender.com/api/products",params)
    .then((res)=>{
      console.log(res.data)
      dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
      
    })
    .catch((err)=>{
        dispatch( {type:GET_PRODUCT_FAILURE})
     console.log(err)
    })
  }