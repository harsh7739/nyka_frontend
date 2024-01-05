

import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./actionType";

// NOTE: DO NOT MODIFY the intial state structure in this file.
const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState,{type,payload}) => {
  switch(type){
    case LOGIN_REQUEST :
      return {
        ...state,
        isLoading:true
      }
    case LOGIN_SUCCESS :
      return{
        ...state,
        isLoading:false,
        isAuth:true,
        token:payload
      }
    case LOGIN_FAILURE :
      return {
        ...state,
        isLoading:false,
        isAuth:false,
        isError:true
      }
      case LOGOUT :
        return {
          ...state,
          isAuth: false,
          token: "",
          isLoading: false,
          isError: false,
        }
      
 default :
 return state;
  }
};

export { reducer };