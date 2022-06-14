// Product actions here
import axios from "axios"
import {GET_PRODUCTS_SUCCESS} from "./product.types"

export const get=(payload)=>(dispatch)=>{
    
    dispatch({type:GET_PRODUCTS_SUCCESS,payload:payload})
}
