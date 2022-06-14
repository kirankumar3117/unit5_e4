// TODO: use this store variable to create a store.
import {legacy_createStore, combineReducers, compose, applyMiddleware} from "redux"
import {authReducer} from "./auth/auth.reducer"
import {productReducer} from "./product/product.reducer"
import thunk from "redux-thunk"
import { cartReducer } from "./cart/cart.reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootreducer =  combineReducers({auth: authReducer, products: productReducer, cart:cartReducer})


export const store = legacy_createStore(rootreducer, composeEnhancers(applyMiddleware(thunk)))


// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
