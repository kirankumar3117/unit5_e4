// Auth Actions here

import { AUTH_SIGN_IN_SUCCESS } from "./auth.types"


export const login=(value)=>(dispatch)=>{
   if(value.email && value.password){
    dispatch({type:AUTH_SIGN_IN_SUCCESS,payload:value})
    }
}