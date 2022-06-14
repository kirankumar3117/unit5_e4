import { AUTH_SIGN_IN_SUCCESS } from "./auth.types";

// Note: Do not update/change the initial state
export const authInitalState = {
  loading: false,
  data: {
    token: "",
    isAuthenticated: false,
  },
  error: false,
};

export const authReducer = (state = authInitalState,{type,payload}) => {
  switch(type){
    case AUTH_SIGN_IN_SUCCESS:{
      return {
        ...state,
        loading:false,
         data:{
          ...state.data,
          token:payload.email,
          isAuthenticated:true
        },
        error:false
      }
    }
    default:{
      return state
    }
  }
 
};
