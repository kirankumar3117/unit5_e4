import { GET_PRODUCTS_SUCCESS } from "./product.types";

// Note: Do not update/change the initial state
const productInitalState = {
  loading: false,
  error: false,
  data: [],
};

export const productReducer = (state = productInitalState,{type,payload}) => {
  switch(type){
    case GET_PRODUCTS_SUCCESS:{
      return {
        ...state,
        data:payload
      }
    }
    default:{
      return state
    }
  }
};
