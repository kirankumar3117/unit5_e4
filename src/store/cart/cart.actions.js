// Cart Actions here

import axios from "axios";
import { GET_CART_ITEMS_SUCCESS, UPDATE_CART_ITEMS_SUCCESS } from "./cart.types"


export const get_cart=(value)=>(dispatch)=>{

    value.map(e=>{
       axios.get(`http://localhost:8080/products/${e.productId}`).then((res)=>{
        console.log(res.data)
    
       })
    })
    dispatch({type:GET_CART_ITEMS_SUCCESS,payload:value})
    // dispatch({type:GET_CART_ITEMS_SUCCESS,payload:value})
}

export const cart_update=({value,add})=>(dispatch)=>{
    axios.patch(`http://localhost:8080/cartItems/${e.id}`,{
        count:count+add

    }).then((res)=>{
        dispatch({type:UPDATE_CART_ITEMS_SUCCESS})
    })
     
}