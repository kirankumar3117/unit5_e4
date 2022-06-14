import React from "react";
import styled from "./Navbar.module.css"
import {Link,useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"

const Navbar = () => {
  const {data:cartdata}=useSelector((state)=>state.cart)
  const navigate=useNavigate()
  const handlelogin=()=>{
    navigate("login")
  }
  const {data}=useSelector((state)=>state.auth)
  return (
    <div data-cy="navbar" className={styled.navbar}>
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <Link data-cy="navbar-home-link" to="">Home</Link>
      </div>
      <div className={styled.cartlogin}>
        <div data-cy="navbar-cart-items-count">
          cart:{data.isAuthenticated ? cartdata.length : 0}
        </div>
        <button data-cy="navbar-login-logout-button" onClick={handlelogin}>
         {data.isAuthenticated ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
