import React from "react";
import { useState } from "react";
import { useRef } from "react";
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from "react-router-dom";
import { login } from "../store/auth/auth.actions";
import Home from "./Home"

const Login = () => {
 
  const [logdata,setLogdata]=useState({})
  const {data}=useSelector((state)=>state.auth)
 const navigate=useNavigate()
  const dispatch=useDispatch()
  const handlechange=(e)=>{
    const {name,value}=e.target
    setLogdata({
      ...logdata,
      [name]:value
    })
    
  }
  const handlesubmit=(e)=>{
    e.preventDefault()
    dispatch(login(logdata))
    
  }

  if(data.isAuthenticated==true){
   return <Home/>
  }
  else{
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input data-cy="login-email" name="email" onChange={(e)=>{handlechange(e)}}/>
        <input data-cy="login-password" name="password" onChange={handlechange}/>
        <button data-cy="login-submit" type="submit" >submit</button>
      </form>
    </div>
  );
  }
};

export default Login;
